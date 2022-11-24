import {
  Dimensions,
  Platform,
  I18nManager,
  NativeModules,
  PixelRatio,
  StatusBar,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import {Header} from 'react-navigation-stack';

const RMS = {
  WIDTH: DeviceInfo.isTablet() ? '730' : '410',
  HEIGHT: DeviceInfo.isTablet() ? '547' : '730',
  ADJUST: 0.065,
  NO_ADJUST: 0,
};

// tamaño barrita inferior android
const SOFT_MENU_HEIGHT =
  Platform.OS === 'android'
    ? NativeModules.DetectHardware.SOFT_MENU_BAR_HEIG
    : 0;

const getWidthAndHeight = () => {
  if (Platform.OS === 'ios') {
    return {
      WIDTH: Dimensions.get('window').width,
      HEIGHT: Dimensions.get('window').height,
    };
  }

  // Fix del Height en ciertos dispositivos Android con notch
  // https://github.com/facebook/react-native/issues/23693#issuecomment-571184297
  const PORTRAIT = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT:
      Dimensions.get('screen').height !== Dimensions.get('window').height &&
      StatusBar.currentHeight > 24
        ? Dimensions.get('screen').height - StatusBar.currentHeight
        : Dimensions.get('window').height,
  };

  const BARS_OFFSET = SOFT_MENU_HEIGHT + StatusBar.currentHeight;

  const LANDSCAPE = {
    WIDTH: Math.max(
      Dimensions.get('screen').width,
      Dimensions.get('screen').height,
    ),
    HEIGHT:
      Math.min(
        Dimensions.get('screen').width,
        Dimensions.get('screen').height,
      ) - BARS_OFFSET,
  };

  return DeviceInfo.isTablet() ? LANDSCAPE : PORTRAIT;
};

const {WIDTH, HEIGHT} = getWidthAndHeight();

export const IMAGE_SIZES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  BEST: 'regular',
};

const SCREEN_RESOLUTIONS = {
  HD: 720,
  FULL_HD: 1080,
  QUAD_HD: 1440,
  FOUR_K: 2560,
};

// si el telefono tiene una proporcion diferente (pantalla alargada del s8 y iphoneX por ejemplo)
// este metodo busca un Height que no dañe la proporcion de la tienda usada por el cms
const storeFixedHeight = () => {
  const cmsRatio = RMS.HEIGHT / RMS.WIDTH;
  const screenRatio = HEIGHT / WIDTH;
  let fixedHeight = HEIGHT;
  if (screenRatio > cmsRatio) {
    fixedHeight = cmsRatio * WIDTH;
    return fixedHeight;
  }
  return fixedHeight;
};

// Si Existe barra menu fisica
const HARDWARE_MENU_BAR =
  Platform.OS === 'android'
    ? NativeModules.DetectHardware.HAS_HARDWARE_MENU_BAR
    : null;

// Esta funcion calcula el position bottom de la canasta para el generic store
const genericStoreBasketPosition = () => {
  let basketBottom = '7%';
  if (Platform.OS === 'android') {
    if (SOFT_MENU_HEIGHT === 0 && HARDWARE_MENU_BAR) {
      basketBottom = '15%';
    }
    if (SOFT_MENU_HEIGHT === 0 && !HARDWARE_MENU_BAR) {
      basketBottom = '4%';
    }
    if (SOFT_MENU_HEIGHT !== 0 && !HARDWARE_MENU_BAR) {
      basketBottom = '13%';
    }
  }
  return basketBottom;
};

const getProductAssetQuality = () => {
  const pixelRatio = PixelRatio.get();
  const pixels = Math.min(WIDTH, HEIGHT) * pixelRatio;
  switch (true) {
    case pixels >= SCREEN_RESOLUTIONS.FOUR_K:
      return IMAGE_SIZES.BEST;
    case pixels >= SCREEN_RESOLUTIONS.QUAD_HD:
      return IMAGE_SIZES.HIGH;
    case pixels >= SCREEN_RESOLUTIONS.FULL_HD:
      return IMAGE_SIZES.HIGH;
    case pixels >= SCREEN_RESOLUTIONS.HD:
      return IMAGE_SIZES.MEDIUM;
    default:
      return IMAGE_SIZES.LOW;
  }
};

export default class Device {
  static width = WIDTH;

  static height = HEIGHT;

  static storeWidth = WIDTH;

  static storeHeight = storeFixedHeight();

  static imageSize = getProductAssetQuality();

  static isAndroid = Platform.OS === 'android';

  static genericStoreBasketPosition = genericStoreBasketPosition();

  static scaleXAndroid = Device.isAndroid && I18nManager.isRTL ? -1 : 1;

  static scaleXIOS = !Device.isAndroid && I18nManager.isRTL ? -1 : 1;

  static bundleName = DeviceInfo.getBundleId();

  static appName = DeviceInfo.getApplicationName();

  static flexDirection =
    Device.isAndroid && I18nManager.isRTL ? 'row-reverse' : 'row';

  static textAlignIOS =
    !Device.isAndroid && I18nManager.isRTL ? 'right' : 'left';

  static leftIOS = !Device.isAndroid && I18nManager.isRTL ? '35%' : '8%';

  // por mótivos que no entiendo bien, el método App.conf no está definido cuando
  // la clase Device se está creando, entonces no se puede usar en propiedades estáticas
  // dentro de métodos funciona bien
  static scaleWidth = () => WIDTH / RMS.WIDTH;

  static scaleHeight = () =>
    (storeFixedHeight() - (DeviceInfo.isTablet() ? 0 : SOFT_MENU_HEIGHT)) /
    RMS.HEIGHT;

  // tuvimos que hacer un ajuste para escalar la tienda con respecto al RMS este aplica solo para la tienda
  static scaleStoreWidth = () => WIDTH / RMS.WIDTH - RMS.ADJUST;

  static isiPhoneX = !Device.isAndroid && HEIGHT / WIDTH > 2.16;

  static osVersion = Platform.Version;

  static isTablet = () => DeviceInfo.isTablet();

  static getStatusBarHeight = () => {
    let deviceTopBar = 0;
    if (Device.isiPhoneX) {
      deviceTopBar = 24;
    }
    if (Device.isAndroid) {
      deviceTopBar = StatusBar.currentHeight;
    }
    return deviceTopBar;
  };

  static getHeaderPadding = () => {
    return !Device.isAndroid ? Device.getStatusBarHeight() + 20 : 0;
  };

  //   static getHeaderHeight = () => Header.HEIGHT;

  static getStoreTransforms = () => {
    const transforms = {
      scale: 1,
      translateY: 0,
    };

    if (this.isTablet()) {
      // const HEADER_HEIGHT = Header.HEIGHT;
      const SUBCORRIDOR_HEADER_HEIGHT = 70 * this.scaleStoreHeight();
      const height =
        HEIGHT +
        StatusBar.currentHeight -
        //   HEADER_HEIGHT -
        SUBCORRIDOR_HEADER_HEIGHT;
      const MIN_Y = 70;
      const MAX_Y = 545;
      const MAX_RMS_STORE_HEIGHT = (MAX_Y - MIN_Y) * this.scaleStoreHeight();

      const translateY = height - MAX_RMS_STORE_HEIGHT;
      if (height >= MAX_RMS_STORE_HEIGHT) {
        transforms.translateY = translateY;
      } else {
        transforms.scale = height / MAX_RMS_STORE_HEIGHT;
        transforms.translateY = translateY * transforms.scale;
      }
      return transforms;
    }

    //  const HEADER_HEIGHT = Header.HEIGHT;
    const SUBCORRIDOR_HEADER_HEIGHT = 70 * this.scaleStoreHeight();
    const BASKET_RATIO = 621 / 231;

    const MIN_Y = 47;
    const MAX_Y = 659;
    const BASKET_HEIGHT =
      (270 / BASKET_RATIO) * this.scaleWidth() - (this.isiPhoneX ? 0 : 22);
    const MAX_RMS_STORE_HEIGHT = (MAX_Y - MIN_Y) * this.scaleStoreHeight();

    const height =
      HEIGHT -
      this.getStatusBarHeight() -
      // HEADER_HEIGHT -
      SUBCORRIDOR_HEADER_HEIGHT -
      BASKET_HEIGHT;
    const offsetHeader =
      SUBCORRIDOR_HEADER_HEIGHT - MIN_Y * this.scaleStoreHeight();
    const translateY = (height - MAX_RMS_STORE_HEIGHT) / 2;

    if (height >= MAX_RMS_STORE_HEIGHT) {
      transforms.translateY = translateY;
    } else {
      transforms.scale = height / MAX_RMS_STORE_HEIGHT;
      transforms.translateY = translateY / transforms.scale;
    }
    transforms.translateY += offsetHeader;
    return transforms;
  };

  static getDeviceHeaders = () => ({
    os_type: Device.isAndroid ? 'android' : 'ios',
    device_type: Device.isTablet() ? 'tablet' : 'smartphone',
    os_version: Device.osVersion.toString(),
    device_id: Device.deviceId(),
    app_version: Device.appVersion(),
  });
}
