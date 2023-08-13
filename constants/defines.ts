export default {
  treeMapTitle: {
    interest: '관심종목 분류',
    category: '카테고리 분류',
  },
  server: {
    // dev로 수행하는 경우 webpack config 에서 Proxy 를 사용하기때문에 주소 삭제 (http://localhost:3090)
    url: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3090',
    api: {
      category: '/api/category',
      stockInCategory: 'stock-in-category',
    },
  },

  Nodata: {
    interestStockText: '관심 종목에 등록된 데이터가 없습니다.',
  },

  Text: {
    stockListTitle: '종목리스트',
  },
};
