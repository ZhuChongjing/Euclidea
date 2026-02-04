from EuclideaStyle import *

class Angle60(Scene):
    def construct(self):
        # ----- LE 解法 -----
        # 初始界面
        dot0 = EuclideaQuestionPoint([-1,0,0])
        line0 = EuclideaQuestionLine([-1,0,0], [10,0,0])
        self.add(dot0, line0)
        self.wait()

        # Step 1
        dot1 = EuclideaNonfixedPoint([2,0,0])
        circle1 = EuclideaCircle(dot0.get_center(), dot1.get_center())
        select(dot0, circle1)
        self.add(dot1, circle1)
        self.wait()

        # Step 2
        all_deselect(self)
        circle2 = EuclideaCircle(dot1.get_center(), dot0.get_center())
        select(dot1, circle2)
        self.add(circle2)
        self.wait()

        # Step 3
        all_deselect(self)
        dot3 = EuclideaIntersectionPoint(circle1, circle2, index=0)
        line3 = EuclideaLine(dot0.get_center(), dot3.get_center())
        select(dot0, dot3, line3)
        self.add(dot3, line3)
        self.wait()

        # Finish: LE
        all_deselect(self)
        dot0.turn_finished()
        line3_finished = ExtendLine(line3, 0, 5)
        line3_finished.turn_finished()
        self.remove(line3)
        self.add(line3_finished)
        self.wait()

        # ----- V 解法 -----
        # Step 4
        all_deselect(self)
        dot4 = EuclideaIntersectionPoint(circle1, circle2, index=1)
        line4 = EuclideaLine(dot0.get_center(), dot4.get_center())
        select(dot0, dot4, line4)
        self.add(dot4, line4)
        self.wait()

        # Finish: V
        all_deselect(self)
        line4_finished = ExtendLine(line4, 0, 5)
        line4_finished.turn_finished()
        line3_finished.turn_v_finished()
        line0.turn_finished()
        self.remove(line4)
        self.add(line4_finished)
        self.wait()

Angle60().render()