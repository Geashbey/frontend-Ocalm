export const setSearch = (searchValue, data) => {
  const inputValue = searchValue.toLowerCase();

  const filterData = data.filter(item => item.title.rendered.toLowerCase().includes(inputValue));
  return filterData;
};

export const returnResults = (value) => {
  const resultsLength = value.length;

  if (resultsLength === 0) {
    return '0';
  }

  return resultsLength;
};

export const researchVideoDisplay = (firstArray, secondArray) => {
  if (firstArray.length > 0) {
    return firstArray;
  } if (secondArray.length > 0) {
    return secondArray;
  }
  return [];
};

export const getVideoBySlug = (videos, slug) => {
  videos.find((video) => video.slug === slug);
};

export const convertHTML = (htmlString) => {
  const string = htmlString.replace('<p>', '').replace('</p>', '').replace(/&rsquo;/g, "'").replace(/&#038;/g, '&').replace(/&#8230;/g, '');
  return string;
};

export const compareUserArray = (users, token) => {
  users.forEach((user) => {
    const filterData = user.find(token);
    console.log(filterData);
    return filterData;
  });
};

export const getRandomValue = (array) => {
 const randomValue = array[Math.floor(Math.random() * array.length)];
 return randomValue;
};

export const displayError = (response) => {
  console.log(response);
  if (response.toString().includes('403')) {
    return '/error403';
  } if (response.toString().includes('404')) {
    return '/error404';
  } if (response.toString().includes('500')) {
    return '/error500';
  }
};

export const shortTitle = (string) => {
  const comparedString = string.toString();
  if (comparedString.length > 30) {
    const newTitle = comparedString.substring(0, 30);
    const finalTitle = `${newTitle}...`;
    return finalTitle;
  }
  if (comparedString.length < 30) {
    return string;
  }
};
