


export const chipColor = (taskType) => {
    let colorStyle = {};
    let bgColor = null;
        let color = null;
    switch (taskType) {
      case 'Technical':
            color = '#2F80ED';
            bgColor = '#D5E6FB';
        break;
      case 'Design':
            color = '#219653';
            bgColor = '#D3EADD';
        break;
      case 'Front-end':
            color = '#F2C94C';
            bgColor='#FCF4DB'
        break;
      case 'Full-stack':
            color = '#F2994A';
            bgColor='#F2994A'
        break;
      default:
            color = '#9B51E0';
            bgColor= '#EBDCF9';
        break;
    }
    colorStyle = {color,bgColor};
    return colorStyle
}
