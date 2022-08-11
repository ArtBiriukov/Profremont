const rebildInputs = (event) => {
  const target = event.target,
    regExpTextUp = /( |^)[а-яёa-z]/g,
    regExpDelSpaceForword = /^(\s*\-*)*/g,
    regExpDelSpaceBack = /[\s*\-*]*$/g;

  const delSpaceForwordBack = () => {
    target.value = target.value.replace(regExpDelSpaceForword, '');
    target.value = target.value.replace(regExpDelSpaceBack, '');
  };

  if (target.name === 'fio') {
    delSpaceForwordBack();
    target.value = target.value.replace(regExpTextUp, (x) => x.toUpperCase());
  }

  if (target.name === 'phone') {
    delSpaceForwordBack();
    target.value = target.value.replace(/\++/g, '+');
    target.value = target.value.replace(/\-+/g, '-');
    target.value = target.value.replace(/\(+/g, '(');
    target.value = target.value.replace(/\)+/g, ')');
  }
};

export default rebildInputs;
