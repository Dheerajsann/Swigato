const filterData = (searchTxt, restaurants) => {
    const data = restaurants.filter((resta) =>
      resta?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    return data;
  };


  export default filterData;