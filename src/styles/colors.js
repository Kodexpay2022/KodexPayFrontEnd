// import conf from '~/conf/conf.json';

const baseColors = {
  blueMain: '#03082a',
  grayText: '#777d8a',
  whiteBackground: '#f7f8ff',
  whiteBackgroundInputs: '#ffffff',
};

// In order to have different color sets for each target
const appColors = {
  kodexpay: {
    mainColor: baseColors.blueMain,
    grayText: baseColors.grayText,
    whiteBackground: baseColors.whiteBackground,
    whiteBackgroundInputs: baseColors.whiteBackgroundInputs,
  },
};

const colors = {
  ...baseColors,
  ...appColors['kodexpay'],
};

export default colors;
