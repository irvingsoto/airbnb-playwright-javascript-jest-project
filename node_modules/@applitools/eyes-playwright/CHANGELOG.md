# Change Log

## Unreleased










## 1.13.0 - 2022/11/29

### Features
- Added new selector extensions `child` and `fallback`
- Changed default value of `sendDom` from `true` to dynamically calculated
- Mark target element with `data-applitools-scroll` attribute before capture dom
- Added new iOS device - 'iPad Pro (11-inch) (4th generation)'
- Use user agent metadata to improve browser environment detection logic
- Use APPLITOOLS_CONCURRENCY env variable to specify concurrency
- Added `ignoreColors` method to `CheckSettings` to set a match level
### Bug fixes
- Fixed issue with ufg renders failing intermittently
- Fixed error that was happening when test results were deleted
- Fixed bug that caused `extractText` to throw, due to fractional size of the target region
- Fix dontCloseBatches mapping

## 1.12.7 - 2022/10/11

### Features
- Applied client's user-agent by default to resource requests in ufg mode
### Bug fixes
- Fixed wrong signature of `closeBatch` function
- Blank missed frames src in ufg
- Fix an issue when ufg related requests were not sent through the proxy
- Fixed issue with logs not being saved/written

## 1.12.6 - 2022/10/4

### Features
### Bug fixes
- Fixed bug when error was thrown when coded region wasn't found using selector

## 1.12.5 - 2022/10/4

### Features
- Deprecated "Content" match level value in favor of "IgnoreColors"
### Bug fixes
- Fixed the issue with screenshots being taken on chrome-emulated devices

## 1.12.4 - 2022/9/26

### Features
### Bug fixes
- Fixed minor issues

## 1.12.3 - 2022/9/23

### Features
- Don't fail `eyes.open` when there is a failure to set viewport size in `UFG`.
- Using `lazyLoad.waitingTime` as a delay between stitches by default
- Added `Sony Xperia 10 II` emulation device
- Added `iPhone 14`  and `iPhone 14 Pro Max` ios devices
### Bug fixes
- Fixed incorrect calculation of the target element position.

## 1.12.2 - 2022/7/28

### Features
- Added support for taking full screenshots of elements that are scroll by pages only
- Allowed `` values in custom properties
- Add special attribute for pseudo elements
- Add the ability for the SDK to lazy load the page prior to performing a check window
- Support padding for regions in the following region types - ignoreRegions, layoutRegions, strictRegions, contentRegions
- Support `addMobileDevice` in user API for NMG
- Add support for dynamic coded regions
### Bug fixes
- Fixed broken links to enums implementation in the README.md
- Fixed `forceFullPageScreenshot` option behavior
- Fix calling `waitBeforeCapture` when failed to set required viewport size
- Fix rendering issues with Salesforce Lightning design system
- Fix issue that prevented self-signed certificates from working when connecting through a proxy server
- Fixed bug where a failure in a single UFG environment fails all other environments in the same configuration
- Better support in DOM slot element

## 1.12.1 - 2022/6/2

### Features
### Bug fixes
- Fix rounding error of image size when scaling introduces fractions

## 1.12.0 - 2022/6/1

### Features
- Dorp support for Node.js versions <=12
### Bug fixes
- Fixed incorrect calculation of coded regions in classic mode when using CSS stitching

## 1.11.4 - 2022/5/27

### Features
- Support iPhone SE `IosDeviceName.iPhone_SE` and iPhone 8 Plus `IosDeviceName.iPhone_8_Plus` iOS devices
- Support Galaxy S22 `DeviceName.Galaxy_S22` emulation device
### Bug fixes
- Allow running with self-signed certificates
- Fixed `CheckSetting`'s `fully` being overridden by `Configuration`'s `forceFullPageScreenshot`
- Set EyesExceptions (such as new test, diffs exception and failed test exception) to exception property in TestResultsSummary
- Improve error message when failed to set viewport size

## 1.11.3 - 2022/5/2

### Features
- Support UFG for native mobile
- `runner.getAllTestResults` returns the corresponding UFG browser/device configuration for each test. This is available as `runner.getAllTestResults()[i].browserInfo`.
### Bug fixes
- `runner.getAllTestResults` now aborts unclosed tests
- `runner.getAllTestResults` now returns all results, including aborted tests
- `extractText` now supports regions that don't use hints while using `x`/`y` coordinates
- accept ios and android lowercase as driver platformName capability when using custom grid
- Fixed check region fully in classic execution when using CSS stitching
- Support data urls in iframes

## 1.11.2 - 2022/1/13

- fix taking multiple dom snapshots with `layoutBreakpoints`
- updated to @applitools/eyes-sdk-core@12.24.13 (from 12.24.2)
- updated to @applitools/visual-grid-client@15.8.60 (from 15.8.47)

## 1.11.1 - 2021/11/18

- updated to @applitools/eyes-sdk-core@12.24.1 (from 12.24.0)
- updated to @applitools/visual-grid-client@15.8.45 (from 15.8.44)
- updated to @applitools/eyes-sdk-core@12.24.2 (from 12.24.1)
- updated to @applitools/spec-driver-playwright@1.3.0 (from 1.2.0)
- updated to @applitools/visual-grid-client@15.8.47 (from 15.8.45)

## 1.11.0 - 2021/11/10

- support cookies
- updated to @applitools/eyes-api@1.1.6 (from 1.1.5)
- updated to @applitools/eyes-sdk-core@12.24.0 (from 12.23.24)
- updated to @applitools/spec-driver-playwright@1.2.0 (from 1.1.1)
- updated to @applitools/visual-grid-client@15.8.44 (from 15.8.37)

## 1.10.0 - 2021/11/5

- updated to @applitools/eyes-api@1.1.5 (from 1.1.4)
- updated to @applitools/eyes-sdk-core@12.23.24 (from 12.23.18)
- updated to @applitools/visual-grid-client@15.8.43 (from 15.8.37)

## 1.9.4 - 2021/10/20

- updated to @applitools/eyes-sdk-core@12.23.18 (from 12.23.17)
- updated to @applitools/spec-driver-playwright@1.1.1 (from 1.1.0)
- updated to @applitools/visual-grid-client@15.8.37 (from 15.8.36)

## 1.9.3 - 2021/10/18

- updated to @applitools/eyes-sdk-core@12.23.17 (from 12.23.15)
- updated to @applitools/visual-grid-client@15.8.36 (from 15.8.34)

## 1.9.2 - 2021/10/12

- updated to @applitools/eyes-api@1.1.4 (from 1.0.12)
- updated to @applitools/eyes-sdk-core@12.23.15 (from 12.22.6)
- updated to @applitools/visual-grid-client@15.8.34 (from 15.8.20)

## 1.9.1 - 2021/8/13

- updated to @applitools/eyes-api@1.0.12 (from 1.0.11)
- updated to @applitools/eyes-sdk-core@12.22.6 (from 12.22.4)
- updated to @applitools/visual-grid-client@15.8.20 (from 15.8.18)

## 1.9.0 - 2021/8/9

- updated to @applitools/eyes-api@1.0.11 (from 1.0.7)
- updated to @applitools/eyes-sdk-core@12.22.4 (from 12.21.3)
- updated to @applitools/utils@1.2.2 (from 1.2.0)
- updated to @applitools/visual-grid-client@15.8.18 (from 15.8.13)

## 1.8.3 - 2021/7/14

- added full typescript support
- introduced @applitools/eyes-api package with new api
- updated to @applitools/eyes-api@1.0.7 (from 1.0.3)
- updated to @applitools/eyes-sdk-core@12.21.3 (from 12.20.0)
- updated to @applitools/visual-grid-client@15.8.13 (from 15.8.7)

## 1.8.2 - 2021/5/25

- updated to @applitools/eyes-sdk-core@12.19.3 (from 12.19.2)
- updated to @applitools/visual-grid-client@15.8.6 (from 15.8.5)
- added full typescript support
- introduced @applitools/eyes-api package with new api
- updated to @applitools/eyes-api@1.0.3 (from 1.0.1)
- updated to @applitools/eyes-sdk-core@12.20.0 (from 12.19.3)
- updated to @applitools/utils@1.2.0 (from 1.1.3)
- updated to @applitools/visual-grid-client@15.8.7 (from 15.8.6)

## 1.8.1 - 2021/5/12

- updated to @applitools/eyes-api@1.0.1 (from 1.0.0)
- updated to @applitools/eyes-sdk-core@12.19.2 (from 12.19.1)
- updated to @applitools/visual-grid-client@15.8.5 (from 15.8.4)

## 1.8.0 - 2021/5/11

- added full typescript support
- introduced @applitools/eyes-api package with new api
- updated to @applitools/eyes-api@1.0.0 (from 0.0.2)
- updated to @applitools/eyes-sdk-core@12.19.1 (from 12.14.2)
- updated to @applitools/utils@1.1.3 (from 1.1.0)
- updated to @applitools/visual-grid-client@15.8.4 (from 15.5.14)

## 1.7.0 - 2021/4/26

- updated to @applitools/eyes-sdk-core@12.17.4 (from 12.17.2)
- updated to @applitools/visual-grid-client@15.8.2 (from 15.8.0)

## 1.6.0 - 2021/4/22

- updated to @applitools/eyes-sdk-core@12.17.2 (from 12.14.2)
- updated to @applitools/visual-grid-client@15.8.0 (from 15.5.14)

## 1.5.1 - 2021/1/29

- chore: add husky
- updated to @applitools/eyes-sdk-core@12.14.2 (from 12.10.0)
- updated to @applitools/visual-grid-client@15.5.14 (from 15.4.0)
- updated to @applitools/visual-grid-client@15.5.14 (from 15.4.0)
## 1.5.0 - 2020/12/18

- updated to @applitools/eyes-sdk-core@12.10.0 (from 12.9.2)
- updated to @applitools/visual-grid-client@15.4.0 (from 15.3.1)

## 1.4.1 - 2020/12/14

- updated to @applitools/eyes-sdk-core@12.9.2 (from 12.9.1)
- updated to @applitools/visual-grid-client@15.3.1 (from 15.3.0)

## 1.4.0 - 2020/12/14

- updated to @applitools/eyes-sdk-core@12.9.1 (from 12.6.1)
- updated to @applitools/visual-grid-client@15.3.0 (from 15.2.1)

## 1.3.2 - 2020/12/1

- export `RunnerOptions`

## 1.3.1 - 2020/11/29

- updated to @applitools/visual-grid-client@15.2.1 (from 15.2.0)

## 1.3.0 - 2020/11/25

- using the new concurrency model
- fix firefox region compensation issue
- add 2020 ios devices
- fix coded region calculation when running in target region ([Trello 538](https://trello.com/c/FQ8iJZdi))
- deprecate `saveDebugData`
- updated to @applitools/eyes-sdk-core@12.5.7 (from 12.4.2)
- updated to @applitools/visual-grid-client@15.1.1 (from 15.0.10)
- updated to @applitools/eyes-sdk-core@12.6.1 (from 12.5.7)
- updated to @applitools/visual-grid-client@15.2.0 (from 15.1.1)

## 1.2.2 - 2020/10/15

-no changes

## 1.2.1 - 2020/10/15

- add iosVersion to readme
- updated to @applitools/eyes-sdk-core@12.4.2 (from 12.3.1)
- updated to @applitools/visual-grid-client@15.0.10 (from 15.0.9)

## 1.2.0 - 2020/10/7

- updated to @applitools/eyes-sdk-core@12.3.1 (from 11.5.0)
- updated to @applitools/visual-grid-client@15.0.9 (from 14.6.0)

## 1.1.0

- First release
