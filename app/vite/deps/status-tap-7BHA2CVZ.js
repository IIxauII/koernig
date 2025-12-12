import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-NOOFEX3T.js";
import {
  readTask,
  writeTask
} from "./chunk-24JAW5NH.js";
import {
  componentOnReady
} from "./chunk-NWKHJSCU.js";
import "./chunk-47DNBICB.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/.pnpm/@ionic+core@8.7.12/node_modules/@ionic/core/components/status-tap.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(null, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/components/status-tap.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=status-tap-7BHA2CVZ.js.map
