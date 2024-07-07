const all = ['moha', 38, true, () => {}, {}, [], new Date()];
for (let item of all) {
  console.log(item, ' ===> ', typeof item);
  if (typeof item === 'string') {
    console.log('str!');
  }
}
