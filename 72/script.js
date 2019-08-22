let SearchWord = "";
let BaseCurrency=["aaa a", "bbb a", "ccc"];
let BaseCurrencyFiltered = BaseCurrency.filter((currency) => {
  let zzz=~currency.indexOf(SearchWord);
  return zzz;
})
alert (BaseCurrencyFiltered);