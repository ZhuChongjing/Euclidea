# `packs/xxx.html`更改及替换规则

1. 头文件部分更改为以下代码（记得更改`<title>`）
   
   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
       <head>
           <meta http-equiv="content-type" content="text/html; charset=utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <link rel="shortcut icon" href="../assets/favicon.png" type="image/x-icon">
           <link rel="icon" href="../assets/favicon.png" type="image/x-icon">
           <title>Euclidea 解题参考 - xxx</title>
           <link href="../bundle.css" rel="stylesheet">
           <link href="../packs.css" rel="stylesheet">
   ```

2. 找到并删除以下代码
   
   ```html
   
                               <user-menu-component _ngcontent-c3="" _nghost-c6="">
                                   <div _ngcontent-c6="" class="wrapper js-wrapper-dropdown">
                                       <!---->
                                       <!---->
                                       <div _ngcontent-c6="" class="user-block cursor-pointer">
                                           <div _ngcontent-c6="" class="avatar"></div>
                                           <div _ngcontent-c6="" class="user-name">Grant Sanderson</div>
                                       </div>
                                       <a _ngcontent-c6="" class="link dropdown js-dropdown-profile" href="en/profile">
                                           <div _ngcontent-c6="" class="profile-icon"></div>
                                           <span _ngcontent-c6="" class="link-text">Profile</span>
                                       </a>
                                       <a _ngcontent-c6="" class="link dropdown js-dropdown-logout" href="en/logout">
                                           <div _ngcontent-c6="" class="sign-out-icon"></div>
                                           <span _ngcontent-c6="" class="link-text">Sign out</span>
                                       </a>
                                   </div>
                               </user-menu-component>
   ```

3. 找到并删除以下代码
   
   ```html
   
           <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-banner cc-type-info cc-theme-classic cc-bottom cc-color-override--2022745162 cc-invisible" style="display: none;">
               <!--googleoff: all-->
               <span id="cookieconsent:desc" class="cc-message">This website uses cookies to ensure you get the best experience on our website. <a aria-label="learn more about cookies" role="button" tabindex="0" class="cc-link" href="http://cookiesandyou.com" target="_blank">Learn more</a>
               </span>
               <div class="cc-compliance">
                   <a aria-label="dismiss cookie message" role="button" tabindex="0" class="cc-btn cc-dismiss">Got it!</a>
               </div>
               <!--googleon: all-->
           </div>
   ```

4. 找到并删除以下代码
   
   ```html
   
                  <modal-component _ngcontent-c2="" _nghost-c4="">
                      <div _ngcontent-c4="" class="modal">
                          <div _ngcontent-c4="" class="modal-layout"></div>
                          <!---->
                          <div _ngcontent-c4="" class="settings">
                              <div _ngcontent-c4="" class="spinner modal-spinner invisible">
                                  <div _ngcontent-c4="" class="spinner-animation"></div>
                                  <div _ngcontent-c4="" class="spinner-text js-spinner-text">Загрузка...</div>
                              </div>
                              <div _ngcontent-c4="" class="inner-layout"></div>
                              <header _ngcontent-c4="" class="header">
                                  <img _ngcontent-c4="" alt="" class="back-btn" src="/game/assets/BackBtn.422b70dc3f7e2a8220212e54851f670a.svg">
                                  <p _ngcontent-c4="" class="title active">Settings</p>
                                  <p _ngcontent-c4="" class="title">Language</p>
                                  <p _ngcontent-c4="" class="title">Reset progress</p>
                                  <img _ngcontent-c4="" alt="" class="close" src="/game/assets/CloseBtn.36440b7d2e7981d6a80c765efc3eb302.svg">
                              </header>
                              <div _ngcontent-c4="" class="content-wrapper">
                                  <div _ngcontent-c4="" class="content">
                                      <ul _ngcontent-c4="" class="items active">
                                          <li _ngcontent-c4="" class="item">Language</li>
                                          <li _ngcontent-c4="" class="item">Reset progress</li>
                                          <li _ngcontent-c4="" class="item">Help</li>
                                      </ul>
                                      <ul _ngcontent-c4="" class="items">
                                          <!---->
                                      </ul>
                                      <ul _ngcontent-c4="" class="items active">
                                          <li _ngcontent-c4="">
                                              <p _ngcontent-c4="" class="text">Your game progress will be completely erased on all your devices. The levels will be locked again and the game will start from the very beginning. Continue?</p>
                                          </li>
                                          <li _ngcontent-c4="" class="item">Reset</li>
                                          <li _ngcontent-c4="" class="item">Cancel</li>
                                      </ul>
                                  </div>
                              </div>
                              <footer _ngcontent-c4="" class="footer">
                                  <p _ngcontent-c4="" class="copyright">© 2026 HIL</p>
                                  <p _ngcontent-c4="" class="version">v5.16</p>
                              </footer>
                          </div>
                      </div>
                  </modal-component>
                  <modal-help-addon-progress-component _ngcontent-c2="" _nghost-c5="">
                      <div _ngcontent-c5="" class="modal">
                          <div _ngcontent-c5="" class="modal-layout"></div>
                          <div _ngcontent-c5="" class="window">
                              <header _ngcontent-c5="" class="header">
                                  <p _ngcontent-c5="" class="title">Merging progress</p>
                              </header>
                              <p _ngcontent-c5="" class="question">Do you want to combine the current progress on this device with the user progress?</p>
                              <div _ngcontent-c5="" class="buttons">
                                  <div _ngcontent-c5="" class="button">Yes</div>
                                  <div _ngcontent-c5="" class="button">No</div>
                              </div>
                          </div>
                      </div>
                  </modal-help-addon-progress-component>
              </main>
          </main-component>
          <modal-help-component _ngcontent-c0="" _nghost-c1="">
              <div _ngcontent-c1="" class="modal-help js-modal-help">
                  <div _ngcontent-c1="" class="modal-layout"></div>
                  <!---->
                  <div _ngcontent-c1="" class="modal-inner">
                      <div _ngcontent-c1="" class="header">Help <img _ngcontent-c1="" alt="" class="close-icon" src="/game/assets/CloseBtn.36440b7d2e7981d6a80c765efc3eb302.svg">
                      </div>
                      <div _ngcontent-c1="" class="help-window js-help-window" tabindex="0">
                          <div _ngcontent-c1="" class="help-description-title">Solution scoring (L and E)</div>
                          <div _ngcontent-c1="" class="help-description">
                              <p _ngcontent-c1="">Each solution is scored in two types of moves: L (straight or curved lines) and E (elementary Euclidean constructions). Points are not taken into account.</p>
                              <p _ngcontent-c1="">L counts tool actions: constructing a line, a perpendicular, and so on. <br>E counts moves as if a construction was made with real compass and straightedge. Each advanced tool has its own E cost (see the table below). </p>
                              <p _ngcontent-c1="">The goal is to solve a problem using the minimum number of moves. Each level has L and E goals. They are independent. A lot of problems have universal solution that satisfies both goals. But some problems should be solved twice: one solution to reach L goal and another solution to reach E goal.</p>
                              <p _ngcontent-c1="">You can receive the following stars on each level:</p>
                              <ul _ngcontent-c1="" class="stars-block">
                                  <li _ngcontent-c1="" class="star-block">
                                      <img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarIcon.37451e9ac05e273f0cec4df5ce3f719c.svg">
                                      <img _ngcontent-c1="" alt="" class="star-image star-check" src="/game/assets/StarCheckIcon.978f2df4889c3deaa84316d81408585c.svg">the challenge was solved
                                  </li>
                                  <li _ngcontent-c1="" class="star-block">undefined<img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarIcon.37451e9ac05e273f0cec4df5ce3f719c.svg">undefined<img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarLMovesIcon.c429d93810c6102397731a81491817a3.svg">the L goal was reachedundefined</li>undefined<li _ngcontent-c1="" class="star-block">undefined<img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarIcon.37451e9ac05e273f0cec4df5ce3f719c.svg">undefined<img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarEMovesIcon.54740b83353d1907c04f321bf0b7205b.svg">the E goal was reachedundefined</li>undefined<li _ngcontent-c1="" class="star-block">undefined<img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarIcon.37451e9ac05e273f0cec4df5ce3f719c.svg">undefined<img _ngcontent-c1="" alt="" class="star-image" src="/game/assets/StarVIcon.bb55a43473b661978e8f0baebd978980.svg">all variants (V) of answer were foundundefined</li>undefined
                              </ul>undefined
                          </div>undefined<div _ngcontent-c1="" class="help-description-title">V-stars</div>undefined<div _ngcontent-c1="" class="help-description help-description-stars">If there are several objects satisfying the statement of a problem, you can get a hidden V-star by constructing all the answers (solutions) at the same drawing. Usually this implies some kind of symmetry. You need to guess on what levels it is possible because the presence of a V-star is not shown until you find it. Read the statements carefully.</div>undefined<div _ngcontent-c1="" class="help-description-title">If your solution is not accepted</div>undefined<div _ngcontent-c1="" class="help-description">undefined<ul _ngcontent-c1="" class="stars-block">undefined<li _ngcontent-c1="" class="hand-block">undefined<div _ngcontent-c1="" class="tool-icon-absolute icon-HandTool"></div>undefined<p _ngcontent-c1="">Select the Hand tool and try to drag different points. A correct construction should satisfy the statement of the problem for *any* configuration of points and figures.undefined<br>undefined<br>Check the red points. They are not fixed and can be moved. In general, you do not need to avoid them since some optimal solutions are impossible without red points. But, for example, a midpoint or a tangent point can never be red.undefined</p>undefined</li>undefined<li _ngcontent-c1="" class="hand-block">undefined<div _ngcontent-c1="" class="tool-icon-absolute icon-Explore"></div>undefined<p _ngcontent-c1="">Switch to the Explore mode and take a look how the answer depends on point configuration. Compare this with your solution.</p>undefined</li>undefined</ul>undefined</div>undefined<div _ngcontent-c1="" class="help-description">Try to prove that your construction satisfies the statement of the problem. It is not enough if it just visually coincides with the correct answer.undefined<br>undefined<br>If nothing helps, please write us atundefined</div>undefined<a _ngcontent-c1="" class="support-mail" href="/en/support?app=EuclideaWeb">support@euclidea.xyz</a>undefined<div _ngcontent-c1="" class="help-description-title">Cost</div>undefined
                          <!---->undefined<table _ngcontent-c1="" class="tools-list">undefined<tbody _ngcontent-c1="">undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-HandTool"></div>undefined</td>undefined<td _ngcontent-c1="">Move Tool</td>undefined<td _ngcontent-c1="">0L</td>undefined<td _ngcontent-c1="">0E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-PointTool"></div>undefined</td>undefined<td _ngcontent-c1="">Point Tool</td>undefined<td _ngcontent-c1="">0L</td>undefined<td _ngcontent-c1="">0E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-LineTool"></div>undefined</td>undefined<td _ngcontent-c1="">Line Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">1E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-CircleTool"></div>undefined</td>undefined<td _ngcontent-c1="">Circle Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">1E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-PBisectTool"></div>undefined</td>undefined<td _ngcontent-c1="">Perpendicular Bisector Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">3E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-PerpTool"></div>undefined</td>undefined<td _ngcontent-c1="">Perpendicular Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">3E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-ABisectTool"></div>undefined</td>undefined<td _ngcontent-c1="">Angle Bisector Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">4E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-ParallelTool"></div>undefined</td>undefined<td _ngcontent-c1="">Parallel Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">4E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-CompassTool"></div>undefined</td>undefined<td _ngcontent-c1="">Compass Tool</td>undefined<td _ngcontent-c1="">1L</td>undefined<td _ngcontent-c1="">5E</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<div _ngcontent-c1="" class="tool-icon icon-IntersectTool"></div>undefined</td>undefined<td _ngcontent-c1="">Intersect Tool</td>undefined<td _ngcontent-c1="">0L</td>undefined<td _ngcontent-c1="">0E</td>undefined</tr>undefined</tbody>undefined</table>undefined
                          <!---->undefined<div _ngcontent-c1="" class="help-description-title">Hot keys</div>undefined
                          <!---->undefined<table _ngcontent-c1="" class="hotKeys-list">undefined<tbody _ngcontent-c1="">undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<span _ngcontent-c1="" class="bold">Tools</span>undefined</td>undefined<td _ngcontent-c1=""></td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">M</td>undefined<td _ngcontent-c1="">Move Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">.</td>undefined<td _ngcontent-c1="">Point Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">I</td>undefined<td _ngcontent-c1="">Line Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">O</td>undefined<td _ngcontent-c1="">Circle Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">T</td>undefined<td _ngcontent-c1="">Perpendicular Bisector Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">L</td>undefined<td _ngcontent-c1="">Perpendicular Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">A</td>undefined<td _ngcontent-c1="">Angle Bisector Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Z</td>undefined<td _ngcontent-c1="">Parallel Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Q</td>undefined<td _ngcontent-c1="">Compass Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">X</td>undefined<td _ngcontent-c1="">Intersect Tool</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">undefined<span _ngcontent-c1="" class="bold">Controls</span>undefined</td>undefined<td _ngcontent-c1=""></td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Arrow keys</td>undefined<td _ngcontent-c1="">Move the drawing in the direction of the arrow</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Right mouse button drag</td>undefined<td _ngcontent-c1="">Move the drawing</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Page Up,undefined<br _ngcontent-c1="">Mouse wheel forwardundefined</td>undefined<td _ngcontent-c1="">Zoom in the view</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Page Down,undefined<br _ngcontent-c1="">Mouse wheel backwardundefined</td>undefined<td _ngcontent-c1="">Zoom out the view</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Esc</td>undefined<td _ngcontent-c1="">Cancel the current action</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Ctrl + Z</td>undefined<td _ngcontent-c1="">Undo one construction step</td>undefined</tr>undefined<tr _ngcontent-c1="">undefined<td _ngcontent-c1="">Ctrl + Shift + Z</td>undefined<td _ngcontent-c1="">Redo the reversed construction step</td>undefined</tr>undefined</tbody>undefined</table>undefined
                      </div>undefined<div _ngcontent-c1="" class="scroll-down"></div>undefined
                  </div>undefined
              </div>undefined
          </modal-help-component>undefined
      </app-component>undefined<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>undefined<script>
          window.addEventListener('load', function() {
              window.cookieconsent.initialise({
                  palette: {
                      popup: {
                          background: '#2d3336'
                      },
                      button: {
                          background: '#5AA0FF',
                          text: '#fff'
                      }
                  },
                  theme: 'classic'
              })
          });
      </script>undefined<script src="/game/polyfills.9d4d21c2f91d1c14f8ec.js"></script>undefined<script src="/game/vendor.9d4d21c2f91d1c14f8ec.js"></script>undefined<script src="/game/app.9d4d21c2f91d1c14f8ec.js"></script>undefined
   </body>undefined
   ```

5. 补全代码结构
   
   ```html
                   </main>
               </main-component>
           </app-component>
       </body>
   ```

6. 替换
   
   | 查找内容               | 替换内容 | 使用正则表达式 |
   | ------------------ | ---- | ------- |
   | `/en`              |      | 否       |
   | `/game`            | `..` | 否       |
   | `.[a-zA-Z0-9]{32}` |      | 是       |

7. 将`<levels-box-component>`部分内容后缀改为`.html`

8. 找到`<header-component>`部分以下代码
   
   ```html
   
                               <a _ngcontent-c3="" class="logo" href="/">
                                   <img _ngcontent-c3="" alt="" class="logo-img" src="../assets/LogoPacksScreen.png">
                               </a>
                               <div _ngcontent-c3="" class="divider"></div>
                               <div _ngcontent-c3="" class="settings"></div>
                               <div _ngcontent-c3="" class="divider"></div>
   ```
   
    改为以下代码
   
   ```html
   
                               <div _ngcontent-c3="" class="logo">
                                   <img _ngcontent-c3="" alt="" class="logo-img" src="../assets/LogoPacksScreen.png">
                                   <p class="title">解题参考</p>
                               </div>
   ```

9. 在`<body>`下方添加以下代码
   
   ```html
   <img src="../assets/douyin.jpg" class="bottom-left-img">
   ```

10. 最后替换空格


