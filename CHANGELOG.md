### Changelog
All notable changes to this project will be documented in this file.

#### [v1.0.4]
> 16 Oct 2023
- Fix demo


#### [v1.0.3]
> 16 Oct 2023
- Fix demo

#### [v1.0.2]
> 16 Oct 2023
- Add documentation

#### [v1.0.1]
> 16 Oct 2023
- Fix global component name (to remove conflict with original vue-datetime)


#### [v1.0.0]
> 16 Oct 2023
- Add `disable-week-days` prop
- Add `disable-dates` prop

#### [v1.0.0-beta.13](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.12...v1.0.0-beta.13)
> 1 May 2020
- Revert &#x60;rollup-plugin-vue&#x60; update. It doesn&#x27;t output the same files. We should work on it deeper. [`91818e5`](https://github.com/mariomka/vue-datetime/commit/91818e5650cd9377976e1f56c93b6ae810cf6601)

#### [v1.0.0-beta.12](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.11...v1.0.0-beta.12)
> 1 May 2020
- Readme - register component when using CDN [`#193`](https://github.com/mariomka/vue-datetime/pull/193)
- Update &#x60;yarn.lock&#x60; [`ddde993`](https://github.com/mariomka/vue-datetime/commit/ddde9938ee0d9cea4fc8075ae23f40ee29ec2e6f)
- Fix max-datetime when time is midnight. Fixes: #215. [`599faf8`](https://github.com/mariomka/vue-datetime/commit/599faf8a3f603aebf245452bd965710908cf32f7)
- Don&#x27;t add the &#x60;id&#x60; attribute when it is empty. Fixes: #202. [`d9f45b7`](https://github.com/mariomka/vue-datetime/commit/d9f45b7261540ee4ab0302cf19330a9a7049d339)
- Fix travis config [`b8084aa`](https://github.com/mariomka/vue-datetime/commit/b8084aab6872d4b638f8a3788af7288ea4e030c7)
- Update readme [`de01b03`](https://github.com/mariomka/vue-datetime/commit/de01b0370c97f009873a2f2b935c0d18943eb7b3)
- FIX: Update dependency version of the rollup-plugin-vue since the latest 2.x is not compatible with newer vue stack (see https://github.com/vuejs/rollup-plugin-vue/issues/273) [`77f1826`](https://github.com/mariomka/vue-datetime/commit/77f1826522bfad27cbb943b9255d7ba8fca3dcbc)

#### [v1.0.0-beta.11](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.10...v1.0.0-beta.11)
> 13 November 2019
- add curly brackets export name [`#178`](https://github.com/mariomka/vue-datetime/pull/178)
- Add type&#x3D;time to the time example [`#172`](https://github.com/mariomka/vue-datetime/pull/172)
- Update util.js [`#164`](https://github.com/mariomka/vue-datetime/pull/164)
- improve pickers scrolling experience on mobile devices [`#162`](https://github.com/mariomka/vue-datetime/pull/162)
- added a check to see if yearList ref exists [`#131`](https://github.com/mariomka/vue-datetime/pull/131)
- replaced usage of Array.fill to work on old versions on Chrome [`#129`](https://github.com/mariomka/vue-datetime/pull/129)
- Fix min/max dates when picker zone isn&#x27;t UTC [`0576c01`](https://github.com/mariomka/vue-datetime/commit/0576c015c4b0906081ea1218a278f8af34fec13c)
- Expose the popup. [`ad7d42f`](https://github.com/mariomka/vue-datetime/commit/ad7d42fb2f64d8725465cfd2b91eba22a534000d)
- Added height to month selection arrows. [`55d3ac4`](https://github.com/mariomka/vue-datetime/commit/55d3ac432ece6a965a52567eabedef65e9dc2038)

#### [v1.0.0-beta.10](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.9...v1.0.0-beta.10)
> 13 January 2019
- Add title property. Based on #118 [`0da317c`](https://github.com/mariomka/vue-datetime/commit/0da317c4be5ef8c3c21642d0db5bcd17f9d27840)
- Set &#x60;line-height&#x60; for popup [`04db82b`](https://github.com/mariomka/vue-datetime/commit/04db82bc12753b9a60ce3b8a2ff36bc31c6e9c43)
- Remove 0.x notice [`3ba3ea8`](https://github.com/mariomka/vue-datetime/commit/3ba3ea8df943e239c927a4fb2ea38b39f2605c89)

#### [v1.0.0-beta.9](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.8...v1.0.0-beta.9)
> 12 January 2019
- Added new custom slots for Buttons [`#97`](https://github.com/mariomka/vue-datetime/pull/97)
- fix: docs typo [`#99`](https://github.com/mariomka/vue-datetime/pull/99)
- Update &#x60;yarn.lock&#x60; [`24830ab`](https://github.com/mariomka/vue-datetime/commit/24830ab587044fe34162054947af796cb5eaeed0)
- months selector [`5e093d5`](https://github.com/mariomka/vue-datetime/commit/5e093d5f6539f64914894498208d1cc202fd18db)
-  specs for DatetimeMonthsPicker [`38f96d7`](https://github.com/mariomka/vue-datetime/commit/38f96d74f90feaa7368326f010d8b4a34ef04928)
- Add property to customize the flow [`408720a`](https://github.com/mariomka/vue-datetime/commit/408720a400956d8ea4fd1e5df63f61b599368160)
- Update readme [`1f5accd`](https://github.com/mariomka/vue-datetime/commit/1f5accd58a19cbab64bc0adceaf4aa28ccb3ea2b)
- Revert split date for being compatible with all locales. So, month picker will be shown when clicking on the date. [`7892362`](https://github.com/mariomka/vue-datetime/commit/78923624c1e1c97a07aae0e201b1e32a38f75206)
- Add &#x60;input-style&#x60; property and accept &#x60;Object&#x60; and &#x60;Array&#x60; besides to &#x60;String&#x60; for the property &#x60;input-class&#x60;. [`e5653b5`](https://github.com/mariomka/vue-datetime/commit/e5653b5cf7715b44530a9171880ebd53b4247b15)
- Update readme [`0b79ce9`](https://github.com/mariomka/vue-datetime/commit/0b79ce95f21d99ff7c8c684b7f1d3a7bf92332d6)
- Add &#x60;month&#x60; to flow [`84589b8`](https://github.com/mariomka/vue-datetime/commit/84589b864c185e904458c8597f64cf10ceb22df3)
- Fix disabled months. Month could be enabled even if it first and last day is disabled. [`26493f4`](https://github.com/mariomka/vue-datetime/commit/26493f44b323935690556c225b6e6ddd30418f53)
- Code style [`8a2a0bb`](https://github.com/mariomka/vue-datetime/commit/8a2a0bbaf11cd25783305595d085ece5b6773b76)
- Update DatetimePopup.vue [`aa89e7f`](https://github.com/mariomka/vue-datetime/commit/aa89e7fa3589470d098366b218effe0b9bcca02d)
- Set cursor pointer to header date [`1eb7125`](https://github.com/mariomka/vue-datetime/commit/1eb7125373d1fa7dfdf2775631db911d5440120c)
- Set &#x60;inheritAttrs&#x60; to prevent apply not recognized props to the root element. [`a1ff9ee`](https://github.com/mariomka/vue-datetime/commit/a1ff9ee8e0f64409865856b51baa378c892f0f2e)
- fix disabling [`dbefc2f`](https://github.com/mariomka/vue-datetime/commit/dbefc2f009280f15d9c2a096208fd0f689aa817d)
- fix comma-spacing [`9a330e0`](https://github.com/mariomka/vue-datetime/commit/9a330e03af02308e264be739151b94d127c3d474)
- fix comma-dangle [`68c70c2`](https://github.com/mariomka/vue-datetime/commit/68c70c229e18dabe818bbe75f544ca2274496b48)
- fix comma-spacing [`44c69b8`](https://github.com/mariomka/vue-datetime/commit/44c69b83a204296fb1dd30417cfdd224d61caf1a)
- Fix demo [`395f9db`](https://github.com/mariomka/vue-datetime/commit/395f9dbdad4f4b8180e44eaf358c52aef5a3a899)
- Update DatetimePopup.vue [`b80f55b`](https://github.com/mariomka/vue-datetime/commit/b80f55bf5c49918d821c9349738d3a7d103c5222)

#### [v1.0.0-beta.8](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.7...v1.0.0-beta.8)
> 14 October 2018
- Fix min/max [`0466724`](https://github.com/mariomka/vue-datetime/commit/0466724360d90083cede24c940711691d7a4fd68)
- Fix code style [`caa4cd2`](https://github.com/mariomka/vue-datetime/commit/caa4cd2d7d56a9ab2e2634cede7d14635be20d6d)
- Fix min/max + [`bc28704`](https://github.com/mariomka/vue-datetime/commit/bc28704958199177cc63864d669029a8a83d04e8)

#### [v1.0.0-beta.7](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.6...v1.0.0-beta.7)
> 14 October 2018
- Tweak time picker [`3068f46`](https://github.com/mariomka/vue-datetime/commit/3068f46c3ab3dfb42e312b0200d26916a6429129)
- time only spec [`1d2454c`](https://github.com/mariomka/vue-datetime/commit/1d2454c553375e7c3193bfa9cfa6639c2e2feb03)
- Add tests [`00a2603`](https://github.com/mariomka/vue-datetime/commit/00a2603d9695cc1b85588618b2b6c324c5af42a6)
- Update tests [`ae5ef11`](https://github.com/mariomka/vue-datetime/commit/ae5ef118cc408c9788a6d9d3ddef35f51a7c5776)
- Added tests [`84f2b04`](https://github.com/mariomka/vue-datetime/commit/84f2b041d578b3a212f8314898f625cfcdb8ffd4)
- Disable invalid year in yearpicker [`76fd1d9`](https://github.com/mariomka/vue-datetime/commit/76fd1d99f747032b150e76a5eff67d9807a65d6a)
- Respect min date on default selection [`f8e40ea`](https://github.com/mariomka/vue-datetime/commit/f8e40ead674b7d52a6e9dc7c75b221bd27daf23f)
- Added support for named slots [`13ad825`](https://github.com/mariomka/vue-datetime/commit/13ad825dd980dfe70abc723e740ca1dde09d0552)
- time support [`35a0a13`](https://github.com/mariomka/vue-datetime/commit/35a0a1377cea97e3eeb2e5477bb25b14b244941c)
- added setting value via hidden input [`56eb53e`](https://github.com/mariomka/vue-datetime/commit/56eb53eeac48d2df579ee07f622e94af3a942985)
- Fix code style [`87f650f`](https://github.com/mariomka/vue-datetime/commit/87f650f72130d4f4c6ca2b51342a49010de2dbcd)
- fix specs and dupe headers [`077e82a`](https://github.com/mariomka/vue-datetime/commit/077e82af109755da8f204bd741c1ae9ebe385aa4)
- Simplify test [`93f08e2`](https://github.com/mariomka/vue-datetime/commit/93f08e2796a4563009dbdf32a06d730efe5d3d87)
- Fix datetime popup display bug when using UTC zone [`598253e`](https://github.com/mariomka/vue-datetime/commit/598253e48c8f7e0b8ae96a7d7fe96c102ae5cc4a)
- Fix min/max calendar test [`fb48c1c`](https://github.com/mariomka/vue-datetime/commit/fb48c1c6226d6ecabccb9974bad9aa495f5b6cd7)
- Fix case [`fc4a5fb`](https://github.com/mariomka/vue-datetime/commit/fc4a5fb76b50c6b802c92b113d763794d43261db)
- tweaks [`2b8ebed`](https://github.com/mariomka/vue-datetime/commit/2b8ebed08764ba39099212b63b4a532f2785acd6)
- Removed forgotten comments :( [`bc583bf`](https://github.com/mariomka/vue-datetime/commit/bc583bf2556feac6f8e0da80ab73f1ba4bc95b07)

#### [v1.0.0-beta.6](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.5...v1.0.0-beta.6)
> 9 July 2018
- Add empty days at the end of the month to complete the week [`#72`](https://github.com/mariomka/vue-datetime/pull/72)
- Merge branch &#x27;v1.x&#x27; of https://github.com/coreycoburn/vue-datetime into coreycoburn-v1.x [`#56`](https://github.com/mariomka/vue-datetime/issues/56)
- Add test &#x60;should pass datetime to popup&#x60; [`9a22b1e`](https://github.com/mariomka/vue-datetime/commit/9a22b1e4c18175d24ea9961994a877bbd9e1dafb)
- Add &#x60;input-id&#x60; parameter to avoid id collisions [`d3d9797`](https://github.com/mariomka/vue-datetime/commit/d3d979771b5d51b5c0f961a758bb7eef04597107)
- Simplify roundMinute code [`3e28c20`](https://github.com/mariomka/vue-datetime/commit/3e28c2064d1cbe01dbc5ee1986bdacf4eebac6ed)
- Remove seconds and milliseconds when new date is created [`4895a21`](https://github.com/mariomka/vue-datetime/commit/4895a2189717aa526a33c0b99d7d779a4212e8ff)

#### [v1.0.0-beta.5](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.4...v1.0.0-beta.5)
> 9 July 2018
- Add close event [`5fe6a20`](https://github.com/mariomka/vue-datetime/commit/5fe6a20f31d5c29190e0c4ef998a9e50f0d2e7b6)
- Update luxon to v1.x [`06783cf`](https://github.com/mariomka/vue-datetime/commit/06783cf1716d3eda92c820f0da4d880389199aa7)
- Fix test [`2d93a6e`](https://github.com/mariomka/vue-datetime/commit/2d93a6e129847b652c20557e2950a539f1a37f6b)

#### [v1.0.0-beta.4](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.3...v1.0.0-beta.4)
> 8 July 2018
- apply default rounded time when using minute step - resolves #56 [`#56`](https://github.com/mariomka/vue-datetime/issues/56)
- Generate hidden input with raw value when name is passed [`32f8744`](https://github.com/mariomka/vue-datetime/commit/32f87444285396152f04fc2cc4b10dce31c437a3)
- macro tokens are supported. [`5db1a70`](https://github.com/mariomka/vue-datetime/commit/5db1a70b532476e1481123a792bf3dd4ffd39844)
- Add test for macro tokens format [`d995e02`](https://github.com/mariomka/vue-datetime/commit/d995e02a9a9c86915a25ed83993f286b3fdc1a1c)
- Fix value formatting with &#x60;type&#x3D;date&#x60; and specified time zone [`522b19d`](https://github.com/mariomka/vue-datetime/commit/522b19d5c3780b26a1158dd794c249eb51a75dd8)
- Rename &#x60;name&#x60; attribute by &#x60;hidden-name&#x60; [`f06fc41`](https://github.com/mariomka/vue-datetime/commit/f06fc41ff4b4377793f6541c9ca0af63e2359e91)
- Update readme [`4bcbeef`](https://github.com/mariomka/vue-datetime/commit/4bcbeef72201ea899903ec4eb9d59ec75d0bad1b)
- Fix time zone for macro tokens format [`f868eb6`](https://github.com/mariomka/vue-datetime/commit/f868eb636472bdf059d832b95cf71dc7a9559f66)
- fix format describe [`c2a3456`](https://github.com/mariomka/vue-datetime/commit/c2a34563d7b8b3015dd4437d5f76d1473f87ee89)
- fix format describe [`5f44166`](https://github.com/mariomka/vue-datetime/commit/5f441666159a1c98cf65b59ec1fe749e14af173c)
- Macro tokens are supported. [`74deb7d`](https://github.com/mariomka/vue-datetime/commit/74deb7dc264ff7342e6595ebc1d02159208d8b72)

#### [v1.0.0-beta.3](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.2...v1.0.0-beta.3)
> 3 February 2018
- Add 12/24 hour format option to the time picker. [`#39`](https://github.com/mariomka/vue-datetime/pull/39)
- Update issue template [`4c5de6d`](https://github.com/mariomka/vue-datetime/commit/4c5de6d79a8d56f9ee41fef5001035bcf7ce446e)
- Fix demo example code [`2a5944f`](https://github.com/mariomka/vue-datetime/commit/2a5944f4fd1f0393147367ef9e80477529e7d2bd)

#### [v1.0.0-beta.2](https://github.com/mariomka/vue-datetime/compare/v1.0.0-beta.1...v1.0.0-beta.2)
> 23 January 2018
- Add &#x60;week-start&#x60; parameter [`6cb9279`](https://github.com/mariomka/vue-datetime/commit/6cb92797ec9140b02adb5566bdd9dfd5b4869b0c)
- Update demo [`057f87a`](https://github.com/mariomka/vue-datetime/commit/057f87a13d66890df4cc967134f193147acd53ea)
- Fix issue with value time zone [`035d4da`](https://github.com/mariomka/vue-datetime/commit/035d4daeb7d6bd8d051f97458c68707941c9870b)
- Refactoring calendar new date [`d82d09c`](https://github.com/mariomka/vue-datetime/commit/d82d09c82cabb90dda2d7fc876f106edc8c2af5f)
- Rename &#x60;date&#x60; by &#x60;datetime&#x60; in &#x60;Datetime.vue&#x60; [`296f2c0`](https://github.com/mariomka/vue-datetime/commit/296f2c01b92e14dd628e5d667963cd79d1f63705)
- Refactoring [`7d40f6f`](https://github.com/mariomka/vue-datetime/commit/7d40f6fd4d55e1b37b9fa2f4332b758b464f93f5)
- Rename and improve &#x60;clearTime&#x60; util [`ccd80f5`](https://github.com/mariomka/vue-datetime/commit/ccd80f5ed1f7453993fc11e441b941c13d3c312d)
- Fix demo webpack [`579096d`](https://github.com/mariomka/vue-datetime/commit/579096ddb528e6a7db4c2ad157a13995f5c9a775)
- Add &#x60;luxon&#x60; in rollup globals config [`46551bf`](https://github.com/mariomka/vue-datetime/commit/46551bfb6680605c24f9731896224977af378801)
- Add demo link to readme [`44c667f`](https://github.com/mariomka/vue-datetime/commit/44c667fcd9ee5927581f886902ae438488567296)
- Remove auto-changelog limit [`f972692`](https://github.com/mariomka/vue-datetime/commit/f9726929820e3666a9d968c080277c0e0673c0a1)

#### [v1.0.0-beta.1](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.8...v1.0.0-beta.1)
> 19 January 2018
- Cancel popup on key down ESC or TAB [`47c8fca`](https://github.com/mariomka/vue-datetime/commit/47c8fcaf21bf53779f6549bf955ba27baddefd0a)
- Close popup on press ESC key [`072063f`](https://github.com/mariomka/vue-datetime/commit/072063fbab008a1d9c0081b5418a385b40de3623)
- Continue or confirm popup on key down ENTER [`ff281ca`](https://github.com/mariomka/vue-datetime/commit/ff281cab340bc34e2bd7098f72a3ac9ef912aace)
- Fix auto on select time [`69edaaa`](https://github.com/mariomka/vue-datetime/commit/69edaaa3403a664779c026b72a7b1beec06e115c)
- On open popup blur input [`5155ac7`](https://github.com/mariomka/vue-datetime/commit/5155ac7651922bab7a245886df1cafc81d4d1f3a)

#### [v1.0.0-alpha.8](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.7...v1.0.0-alpha.8)
> 18 January 2018
- Value will be an empty string instead of null when the date is empty or invalid because value type is a string. [`3fa3463`](https://github.com/mariomka/vue-datetime/commit/3fa346337cc6266b532c4373142429431fe9972e)
- Update luxon peer dependency version [`2dd13b2`](https://github.com/mariomka/vue-datetime/commit/2dd13b2f8f445c1994d1e4afddedb31006c4417b)

#### [v1.0.0-alpha.7](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.6...v1.0.0-alpha.7)
> 18 January 2018
- Watch value changes [`d58b910`](https://github.com/mariomka/vue-datetime/commit/d58b9109197fcef0334c783130df002760270bd7)
- Update readme and issue template [`8adff3d`](https://github.com/mariomka/vue-datetime/commit/8adff3df24f009048ae0d8beb07b78ef14d1a5f2)
- Ignore all vue devtools globals in mocha [`7daee98`](https://github.com/mariomka/vue-datetime/commit/7daee98d505f683ae7d8cd31035676ab5b03097b)
- Update issue template [`b525ff6`](https://github.com/mariomka/vue-datetime/commit/b525ff62f2ae855eb4a9e5ccda96972821b06b59)

#### [v1.0.0-alpha.6](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.5...v1.0.0-alpha.6)
> 16 January 2018
- Add &#x60;auto&#x60; property [`8d6cec3`](https://github.com/mariomka/vue-datetime/commit/8d6cec3a45e8ce26e7eb0a5ffef7a410167b3809)
- Update readme [`cef7afe`](https://github.com/mariomka/vue-datetime/commit/cef7afe4a4ef7db80209bf48f5dff4bfddbc8254)
- Update luxon to v0.3.1 [`635be46`](https://github.com/mariomka/vue-datetime/commit/635be467a24f760a76e46414660d306f328ea671)
- Fix local time zone test [`e35cec1`](https://github.com/mariomka/vue-datetime/commit/e35cec180762fd15adf359a31eb47eac07a13970)
- Add travis config [`f0289e9`](https://github.com/mariomka/vue-datetime/commit/f0289e96278ddfa2997be8f2bd7812a6784b77f5)
- Fix Datetime types tests [`0e6663c`](https://github.com/mariomka/vue-datetime/commit/0e6663c07c9b40e21646e32dee16982a9a8cd8d5)
- Add shields to readme [`a0af5e3`](https://github.com/mariomka/vue-datetime/commit/a0af5e3ebe242c217bd35b313f3af0839ddd7444)
- Fix license and coverage link [`109a5be`](https://github.com/mariomka/vue-datetime/commit/109a5be52020d7d49dd376bd6a6b36af53470d9e)
- Add &#x60;codecov&#x60; to travis configuration [`122a301`](https://github.com/mariomka/vue-datetime/commit/122a3010b86cfec4b9abd243b40297c63e229dfd)
- Add demo gif [`e528f9e`](https://github.com/mariomka/vue-datetime/commit/e528f9e3f9c90a0627326cec293e63fa78e01b16)
- Fix shields [`9356b3f`](https://github.com/mariomka/vue-datetime/commit/9356b3f1b29f14310dd739d12fa9bf181b0339af)

#### [v1.0.0-alpha.5](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.4...v1.0.0-alpha.5)
> 15 January 2018
- Fix popup time zone [`787752f`](https://github.com/mariomka/vue-datetime/commit/787752f1f48f5a52a55e6440ed86a844d0a49870)
- Add &#x60;input-class&#x60; property [`b94c355`](https://github.com/mariomka/vue-datetime/commit/b94c3554731b2323a4b3050b873737a02773b71b)
- Add issue template [`c0c6057`](https://github.com/mariomka/vue-datetime/commit/c0c605734295413c5135d194f8dd3eb8c1985168)

#### [v1.0.0-alpha.4](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.3...v1.0.0-alpha.4)
> 15 January 2018
- Reformat code [`6391d30`](https://github.com/mariomka/vue-datetime/commit/6391d30f3d778bd55d9e72fd4ad89c60190a8660)
- Add minimum and maximum datetimes. [`5467eec`](https://github.com/mariomka/vue-datetime/commit/5467eec5125b8f3eea605bca3fc57fafb9d473e2)
- Clear time when type is date [`317d0b4`](https://github.com/mariomka/vue-datetime/commit/317d0b4f2b1a3f53daa35fcc1f1589ed80c89f7d)
- Add notice and todo to readme [`6a8855b`](https://github.com/mariomka/vue-datetime/commit/6a8855b0a970972b0992c8e840efcb13637f2ca8)
- Refactor utils [`45a82a3`](https://github.com/mariomka/vue-datetime/commit/45a82a3db8cdb61cd89aa354e1cfd8cc1d899851)
- Update readme parameters section [`4461ab5`](https://github.com/mariomka/vue-datetime/commit/4461ab5340d69b4c959fa4b7007659ef7e0f81e3)
- Add &#x60;__VUE_DEVTOOLS_TOAST__&#x60; to accepted global variables names in mocha. [`1b40d2f`](https://github.com/mariomka/vue-datetime/commit/1b40d2f0f515c65ee5bc49e6ab9c676ea35a7d96)

#### [v1.0.0-alpha.3](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.2...v1.0.0-alpha.3)
> 25 December 2017

#### [v1.0.0-alpha.2](https://github.com/mariomka/vue-datetime/compare/v1.0.0-alpha.1...v1.0.0-alpha.2)
> 25 December 2017
- Add year picker [`c7766c8`](https://github.com/mariomka/vue-datetime/commit/c7766c837bb54ccadbfa6007a7891c7ddea6426d)
- Update &#x60;phrases&#x60; test [`c056826`](https://github.com/mariomka/vue-datetime/commit/c056826b5876f5355d02830600b5670b68628614)
- Pass time steps from date picker to time picker through the popup. [`fd2d338`](https://github.com/mariomka/vue-datetime/commit/fd2d338a731bb3a659fb5ed754b4f87c053d9b7d)
- Fix tests [`539a5cf`](https://github.com/mariomka/vue-datetime/commit/539a5cfc094b0c980e3d40844d2f5a8f6c7c1f0f)
- Refactor flow [`7b19f2f`](https://github.com/mariomka/vue-datetime/commit/7b19f2ffaa2106eb81a84c54e443c9405c3ed679)
- Rename &#x60;i18n&#x60; prop by &#x60;phrases&#x60; and add it to &#x60;Datetime&#x60; component [`46e10ff`](https://github.com/mariomka/vue-datetime/commit/46e10ffff0bded97554a99836c512f8da99546a1)
- Add &#x60;auto-changelog&#x60; package to auto generate changelog on every version [`db2b5ea`](https://github.com/mariomka/vue-datetime/commit/db2b5eab7678fee07c0fa97f4084d9b3468fbac2)
- Update readme [`d882209`](https://github.com/mariomka/vue-datetime/commit/d8822092c9cd99f1748f0faf5eb0ed758ab19da1)
- Remove &#x60;wrapper-class&#x60; and &#x60;input-class&#x60; props. Use &#x60;class&#x60; attribute instead. [`5017b63`](https://github.com/mariomka/vue-datetime/commit/5017b6374486f0cd78f3b508fc495fbdc6185390)
- Refactor how years, hours and minutes are generated. [`e3e5429`](https://github.com/mariomka/vue-datetime/commit/e3e54296b0e9ef7dceed7bba4661d8b6c9f2e532)
- Update readme [`5d60ed3`](https://github.com/mariomka/vue-datetime/commit/5d60ed3bc0f937dc6e380c0dc25d8b9b4677812e)
- Update readme [`63c1c43`](https://github.com/mariomka/vue-datetime/commit/63c1c43d0d91edf8c4f437317a1fb6e06a1ec194)
- Fix transition z-index issue [`9ac6aa9`](https://github.com/mariomka/vue-datetime/commit/9ac6aa9d9b6ab23d826e913a998ae3cac466bccc)
- Remove unused prop [`c709478`](https://github.com/mariomka/vue-datetime/commit/c7094782a9b24702f2ae12f8c99441336837e746)
- Remove duplicated year from header [`f2ba651`](https://github.com/mariomka/vue-datetime/commit/f2ba651edad9392759883482f8d53d84bebe252c)
- Update readme [`d04236a`](https://github.com/mariomka/vue-datetime/commit/d04236ac20954901eb9808c07d754514d53f97f4)

#### v1.0.0-alpha.1
> 20 December 2017

