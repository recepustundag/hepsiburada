export const perPage = 12;

export const percentage = (partialValue, totalValue) => {
  return ((100 - (100 * partialValue) / totalValue)).toFixed(0);
};

export const formatMoney = (price) => {
  const currency_symbol = "₺";

  const formattedOutput = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
  });

  return formattedOutput.format(price).replace(currency_symbol, "");
};

export const colors = () => {
  return [
    {
      id: "Lacivert",
      name: "Lacivert",
    },
    {
      id: "Sarı",
      name: "Sarı",
    },
    {
      id: "Siyah",
      name: "Siyah",
    },
    {
      id: "Beyaz",
      name: "Beyaz",
    },
  ];
};

export const brand = () => {
  return [
    {
      id: "Samsung",
      name: "Samsung",
    },
    {
      id: "Nokia",
      name: "Nokia",
    },
    {
      id: "Apple",
      name: "Apple",
    },
    {
      id: "LG",
      name: "LG",
    },
    {
      id: "Huawei",
      name: "Huawei",
    },
    {
      id: "Xiaomi",
      name: "Xiaomi",
    },
    {
      id: "General Mobile",
      name: "General Mobile",
    },
  ];
};

export const order_sorts = () => {
  return [
    {
      id: "sort_price_min",
      name: "En Düşük Fiyat",
    },
    {
      id: "sort_price_max",
      name: "En Yüksek Fiyat",
    },
    {
      id: "sort_news_min",
      name: "En Yeniler(A>Z)",
    },
    {
      id: "sort_news_max",
      name: "En Yeniler(Z>A)",
    },
  ];
};