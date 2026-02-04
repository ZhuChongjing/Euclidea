from EuclideaStyle import *

class PerpBisector(Scene):
    def construct(self):
        # ----- LE 解法 -----
        # 初始界面
        dot0 = EuclideaQuestionPoint([-1.5,0,0])
        dot0_1 = EuclideaQuestionPoint([1.5,0,0])
        line0 = EuclideaQuestionLine(dot0.get_center(), dot0_1.get_center())
        self.add(dot0, dot0_1, line0)
        self.wait()

        # Step 1
        circle1 = EuclideaCircle(dot0.get_center(), dot0_1.get_center())
        select(dot0, circle1)
        self.add(circle1)
        self.wait()

        # Step 2
        all_deselect(self)
        circle2 = EuclideaCircle(dot0_1.get_center(), dot0.get_center())
        select(dot0_1, circle2)
        self.add(circle2)
        self.wait()

        # Step 3
        all_deselect(self)
        dot3 = EuclideaIntersectionPoint(circle1, circle2, index=0)
        dot3_1 = EuclideaIntersectionPoint(circle1, circle2, index=1)
        line3 = EuclideaLine(dot3.get_center(), dot3_1.get_center())
        select(dot3, dot3_1, line3)
        self.add(dot3, dot3_1, line3)
        self.wait()

        # Finish: LE
        all_deselect(self)
        line3_finished = ExtendLine(line3, 5, 5)
        line3_finished.turn_finished()
        self.remove(line3)
        self.add(line3_finished)
        self.wait()

PerpBisector().render()
