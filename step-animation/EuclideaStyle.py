from manim import *
from manim.typing import Point3DLike
from typing import Literal
import numpy as np
import logging as log
import math, sys, os

EUCLIDEA_RED = "#BE7274"
EUCLIDEA_ORANGE = "#F87600"
EUCLIDEA_YELLOW = "#F8AD00"
EUCLIDEA_BLUE = "#7DB7EC"
EUCLIDEA_WHITE = "#F4F5F7"
EUCLIDEA_GREY = "#ABABAB"
EUCLIDEA_BLACK = "#4B4B4C"
DOT_STROKE_WIDTH = 2
DOT_SELECTED_SCALE = 1.25
config.background_color = EUCLIDEA_WHITE

# --------------------------------- Euclidea样式Mobject ---------------------------------

class _EuclideaMobject(Mobject):
    """Euclidea样式Mobject的基类"""
    selected = False
    finished = False

    def _turn_selected(self):
        self.set_color(EUCLIDEA_BLUE)

    def _turn_unselected(self):
        pass

    def turn_finished(self):
        self.set_color(EUCLIDEA_YELLOW)

    def turn_v_finished(self):
        self.set_color(EUCLIDEA_ORANGE)

    def turn_unfinished(self):
        pass

# --------------------------------- Euclidea样式点 ---------------------------------
PointTypes = Literal["Question", "Fixed", "Nonfixed"]
PointTypeColors = {
    "Question": EUCLIDEA_BLACK,
    "Fixed": EUCLIDEA_GREY,
    "Nonfixed": EUCLIDEA_RED,
}

class _EuclideaPoint(Dot, _EuclideaMobject):
    """Euclidea样式点的基类"""
    def __init__(self, position: Point3DLike, point_type: PointTypes):
        self._color = PointTypeColors[point_type]
        super().__init__(
            point=position,
            radius=DEFAULT_SMALL_DOT_RADIUS,
            color=EUCLIDEA_WHITE,
            stroke_color=self._color,
            stroke_width=DOT_STROKE_WIDTH,
        )
        self.set_z_index(1)

    def _turn_selected(self):
        self.set_stroke(color=EUCLIDEA_BLUE, width=DOT_STROKE_WIDTH).scale(DOT_SELECTED_SCALE)

    def _turn_unselected(self):
        self.set_stroke(color=self._color, width=DOT_STROKE_WIDTH).scale(1/DOT_SELECTED_SCALE)

    def turn_finished(self):
        self.set_stroke(color=EUCLIDEA_YELLOW, width=DOT_STROKE_WIDTH)
        if not self.selected:
            self.scale(DOT_SELECTED_SCALE)
        self.finished = True

    def turn_v_finished(self):
        self.set_stroke(color=EUCLIDEA_ORANGE, width=DOT_STROKE_WIDTH)
        if self.selected:
            self.scale(DOT_SELECTED_SCALE)
        self.finished = True

    def turn_unfinished(self):
        if not self.finished:
            log.warning("Point is not finished, cannot turn unfinished")
            return
        self.set_stroke(color=self._color, width=DOT_STROKE_WIDTH)
        self.scale(1/DOT_SELECTED_SCALE)
        self.finished = False

class EuclideaQuestionPoint(_EuclideaPoint):
    """Euclidea样式题目已知点"""
    def __init__(self, position: Point3DLike):
        super().__init__(position, "Question")

class EuclideaFixedPoint(_EuclideaPoint):
    """Euclidea样式固定点"""
    def __init__(self, position: Point3DLike):
        super().__init__(position, "Fixed")

class EuclideaNonfixedPoint(_EuclideaPoint):
    """Euclidea样式非固定点"""
    def __init__(self, position: Point3DLike):
        super().__init__(position, "Nonfixed")

# --------------------------------- Euclidea样式线 ---------------------------------
LineTypes = Literal["Question", "Normal"]
LineTypeColors = {
    "Question": EUCLIDEA_BLACK,
    "Normal": EUCLIDEA_GREY,
}

class _EuclideaLine(Line, _EuclideaMobject):
    """Euclidea样式线的基类"""
    def __init__(self, start: Point3DLike, end: Point3DLike, line_type: LineTypes):
        self._color = LineTypeColors[line_type]
        super().__init__(start, end, color=self._color)

    def _turn_unselected(self):
        self.set_color(self._color)

    def turn_unfinished(self):
        if not self.finished:
            log.warning("Line is not finished, cannot turn unfinished")
            return
        self.set_color(self._color)

class EuclideaQuestionLine(_EuclideaLine):
    """Euclidea样式题目已知线"""
    def __init__(self, start: Point3DLike, end: Point3DLike):
        super().__init__(start, end, "Question")

class EuclideaLine(_EuclideaLine):
    """Euclidea样式线"""
    def __init__(self, start: Point3DLike, end: Point3DLike):
        super().__init__(start, end, "Normal")

# --------------------------------- Euclidea样式圆 ---------------------------------
CircleTypes = Literal["Question", "Normal"]
CircleTypeColors = {
    "Question": EUCLIDEA_BLACK,
    "Normal": EUCLIDEA_GREY,
}

class _EuclideaCircle(Circle, _EuclideaMobject):
    """Euclidea样式圆的基类"""
    def __init__(self, center_point: Point3DLike, circumference_point: Point3DLike, circle_type: CircleTypes):
        self._color = CircleTypeColors[circle_type]
        super().__init__(
            radius=np.linalg.norm(circumference_point - center_point),
            color=self._color
        )
        self.move_to(center_point)

    def _turn_unselected(self):
        self.set_color(self._color)

    def turn_unfinished(self):
        if not self.finished:
            log.warning("Circle is not finished, cannot turn unfinished")
            return
        self.set_color(self._color)

class EuclideaQuestionCircle(_EuclideaCircle):
    """Euclidea样式题目已知圆"""
    def __init__(self, center_point: Point3DLike, circumference_point: Point3DLike):
        super().__init__(center_point, circumference_point, "Question")

class EuclideaCircle(_EuclideaCircle):
    """Euclidea样式圆"""
    def __init__(self, center_point: Point3DLike, circumference_point: Point3DLike):
        super().__init__(center_point, circumference_point, "Normal")

# --------------------------------- 选择和取消选择 ---------------------------------

def select(*euclidea_mobs: _EuclideaMobject):
    """选择一个EuclideaMobject"""
    for mob in euclidea_mobs:
        if mob.selected:
            log.warning(f"Mob {mob} is already selected.")
            continue
        mob._turn_selected()
        mob.selected = True

def deselect(*euclidea_mobs: _EuclideaMobject):
    """取消选择一个EuclideaMobject"""
    for mob in euclidea_mobs:
        if not mob.selected:
            log.warning(f"Mob {mob} is not selected.")
            continue
        if mob.finished:
            mob.turn_finished()
            continue
        mob._turn_unselected()
        mob.selected = False

def all_deselect(scene: Scene):
    """取消选择场景中的所有EuclideaMobject"""
    for mob in scene.mobjects:
        if isinstance(mob, _EuclideaMobject) and mob.selected:
            deselect(mob)

# --------------------------------- 其余工具 ---------------------------------

class EuclideaIntersectionPoint(EuclideaFixedPoint):
    """Euclidea样式交点"""
    def __init__(self, mob1: _EuclideaMobject, mob2: _EuclideaMobject, index: int = 0):
        if isinstance(mob1, _EuclideaCircle) and isinstance(mob2, _EuclideaCircle):
            super().__init__(self._CircleCircleIntersection(mob1, mob2)[index])
        else:
            log.warning(f"Mob {mob1} and {mob2}'s intersection(s) is not implemented.")

    def _CircleCircleIntersection(self, circle1: _EuclideaCircle, circle2: _EuclideaCircle) -> list[Point3DLike]:
        """
        计算两个圆的交点，并返回交点列表
        """
        # 提取两个圆的核心参数
        center1 = circle1.get_center()
        center2 = circle2.get_center()
        r1 = circle1.radius
        r2 = circle2.radius
        
        # 提取二维坐标（忽略z轴）
        x1, y1 = center1[0], center1[1]
        x2, y2 = center2[0], center2[1]
        
        # 计算两圆心之间的距离
        d = math.hypot(x2 - x1, y2 - y1)
        
        # 处理无交点的情况：相离（d > r1 + r2）或内含（d < abs(r1 - r2)）或重合（d=0且r1=r2）
        if d > r1 + r2 + 1e-6:  # 加微小值避免浮点精度问题
            return []
        if d < abs(r1 - r2) - 1e-6:
            return []
        if d < 1e-6 and abs(r1 - r2) < 1e-6:  # 两圆重合
            return []
        
        # 计算交点坐标（解析几何公式）
        a = (r1**2 - r2**2 + d**2) / (2 * d)
        h_squared = r1**2 - a**2
        
        # 处理相切的情况（h² ≈ 0）
        if h_squared < -1e-6:
            return []
        if h_squared < 1e-6:
            h_squared = 0
        h = math.sqrt(h_squared)
        
        # 基准点（圆心连线与公共弦的垂足）
        x0 = x1 + a * (x2 - x1) / d
        y0 = y1 + a * (y2 - y1) / d
        
        # 计算两个交点
        p1_x = x0 - h * (y2 - y1) / d
        p1_y = y0 + h * (x2 - x1) / d
        p2_x = x0 + h * (y2 - y1) / d
        p2_y = y0 - h * (x2 - x1) / d
        
        # 创建Dot对象表示交点（设置样式便于识别）
        dot1 = [p1_x, p1_y, 0]
        dot2 = [p2_x, p2_y, 0]
        
        # 相切时两个交点重合，只返回一个
        if h < 1e-6:
            return [dot1]
        return [dot1, dot2]

def ExtendLine(line: EuclideaLine | EuclideaQuestionLine, extend_start_length: float = 0.0, extend_end_length: float = 0.0) -> EuclideaLine | EuclideaQuestionLine:
    """将直线向指定方向延长指定长度（支持双向同时延长）"""
    # 校验延长长度非负
    if extend_start_length < 0 or extend_end_length < 0:
        raise ValueError("延长长度不能为负数！")
    
    # 1. 获取原始直线的两个端点坐标
    start_point = line.get_start()  # 起始点 (x1, y1, z1)
    end_point = line.get_end()      # 终止点 (x2, y2, z2)
    
    # 2. 计算直线的方向向量和单位向量
    # 原始向量（从start到end）
    vec = end_point - start_point
    # 原始向量的长度（仅计算二维长度，忽略z轴）
    vec_length = math.hypot(vec[0], vec[1])
    if vec_length < 1e-6:  # 防止零向量（两点重合）
        raise ValueError("原始直线的两个端点不能重合！")
    
    # 单位向量（方向不变，长度为1）
    unit_vec = vec / vec_length
    
    # 3. 计算双向延长后的新端点
    new_start = start_point.copy()
    new_end = end_point.copy()
    
    # 向start端延长：新start = 原start - 单位向量 * 延长长度
    if extend_start_length > 1e-6:  # 忽略极小值（避免浮点误差）
        new_start = start_point - unit_vec * extend_start_length
    
    # 向end端延长：新end = 原end + 单位向量 * 延长长度
    if extend_end_length > 1e-6:  # 忽略极小值（避免浮点误差）
        new_end = end_point + unit_vec * extend_end_length
    
    # 4. 创建新直线（保留原直线类型和样式）
    if isinstance(line, EuclideaLine):
        return EuclideaLine(start=new_start, end=new_end)
    elif isinstance(line, EuclideaQuestionLine):
        return EuclideaQuestionLine(start=new_start, end=new_end)
    else:
        raise ValueError("line参数必须是EuclideaLine或EuclideaQuestionLine实例")