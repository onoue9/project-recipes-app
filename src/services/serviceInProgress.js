export function mealInProgress(id) {
  let newInProgress = [];
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgress) {
    newInProgress = { cocktails: {}, meals: { [id]: [] } };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(newInProgress));
  } else {
    const array = inProgress.meals[id] ? [...inProgress.meals[id]] : [];
    newInProgress = {
      meals: { ...inProgress.meals, [id]: array },
      cocktails: { ...inProgress.cocktails },
    };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(newInProgress));
  }
  return (newInProgress);
}

export function drinkInProgress(id) {
  let newInProgress = [];
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgress) {
    newInProgress = { cocktails: { [id]: [] }, meals: { } };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(newInProgress));
  } else {
    const array = inProgress.cocktails[id] ? [...inProgress.cocktails[id]] : [];
    newInProgress = { cocktails: { ...inProgress.cocktails, [id]: array },
      meals: { ...inProgress.meals } };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(newInProgress));
  }
  return (newInProgress);
}

export function doneRecipesVerifier(id) {
  const done = JSON.parse(localStorage.getItem('doneRecipes'));
  if (done && done.some((element) => element.id === id)) {
    return true;
  }
  return false;
}

export function inProgressRecipesVerifier(id) {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress) {
    if (inProgress.cocktails[id]) {
      return true;
    }
    if (inProgress.meals[id]) {
      console.log('chegou');
      return true;
    }
    console.log('false');
    return false;
  }
  return false;
}
