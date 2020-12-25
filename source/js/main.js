import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { menuToggler, onMenuTogglerToggleClass } from './modules/toggler';

import { initSkillbox, skillboxList } from './modules/skillbox';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
if (menuToggler) {
  menuToggler.addEventListener('click', onMenuTogglerToggleClass);
}

if (skillboxList) {
  skillboxList.forEach((item) => initSkillbox(item));
}
