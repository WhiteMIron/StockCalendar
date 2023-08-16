export default {
  treeMapTitle: {
    interest: '관심종목 분류',
    category: '카테고리 분류',
  },
  server: {
    // dev로 수행하는 경우 webpack config 에서 Proxy 를 사용하기때문에 주소 삭제

    url: process.env.NODE_ENV === 'production' ? 'https://app.stock-calendar.site' : '',

    // url: process.env.NODE_ENV === 'production' ? '' : '',

    api: {
      category: '/api/category',
      stockInCategory: 'stock-in-category',
    },
  },

  Nodata: {
    interestStockText: '관심 종목으로 등록된 데이터가 없습니다.',
    categoryStockText: '카테고리에 속한 종목 데이터가 없습니다.',
    categoryText: '카테고리 데이터가 없습니다.',
  },

  Text: {
    stockListTitle: '종목 리스트',
    categoryListTitle: '카테고리 리스트',
  },

  financeAddress: 'https://finance.naver.com/item/main.nhn?code=',
};
