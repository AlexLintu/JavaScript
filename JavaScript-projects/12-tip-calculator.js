const tipCalculator = (quality, total) => {
  switch(quality) {
    case 'bad':
    return total * 0.05;
    break;
    case 'ok':
    return total * 0.15;
    break;
    case 'good':
    return total * 0.2;
    break;
    case 'excellent':
    return total * 0.3;
    break;
    default:
    return total * 0.18;
    break;
  }
}

console.log(tipCalculator('good', 100));