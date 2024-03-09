export const chipColor = (taskType) => {
  let colorStyle = {};
  let bgColor = null;
  let color = null;
  switch (taskType) {
    case '#219653':
      color = '#219653';
      bgColor = '#D3EADD';
      break;
    case '#D3EADD':
      color = '#219653';
      bgColor = '#D3EADD';
      break;
    case '#F2994A':
      color = '#F2C94C';
      bgColor = '#F2994A';
      break;
    case '#FCF4DB':
      color = '#F2994A';
      bgColor = '#FCF4DB33';
      break;
    case '#F2C94C':
      color = '#F2994A';
      bgColor = '#F2C94C33';
      break;
    case '#EB5757':
      color = '#EB5757';
      bgColor = '#EB575733';
      break;
    default:
      color = '#9B51E0';
      bgColor = '#EBDCF9';
      break;
  }
  colorStyle = { color, bgColor };
  return colorStyle;
};
