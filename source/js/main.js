import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initSkillbox, skillboxList } from './modules/skillbox';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

if (skillboxList) {
  skillboxList.forEach((item) => initSkillbox(item));
}
