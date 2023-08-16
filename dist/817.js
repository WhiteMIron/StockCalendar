'use strict';
(self.webpackChunkstock_calendar_ts_front = self.webpackChunkstock_calendar_ts_front || []).push([
  [817],
  {
    76817: (t, l, e) => {
      e.r(l), e.d(l, { default: () => v });
      var s = e(67294),
        n = e(60977),
        a = e(45767),
        r = e(38678),
        o = e(83564),
        u = e(9669),
        Z = e.n(u),
        i = e(89250),
        d = e(79655),
        p = e(76505),
        c = e(70917),
        m = e(34155);
      const v = () => {
        const { data: t, error: l, revalidate: e, mutate: u } = (0, a.ZP)(`${p.Z.server.url}/api/users`, o.Z),
          [v, _] = (0, s.useState)(!1),
          [h, f] = (0, r.Z)(''),
          [k, g] = (0, r.Z)(''),
          w = (0, i.s0)(),
          C = (0, s.useCallback)(
            (t) => {
              t.preventDefault(),
                _(!1),
                Z()
                  .post(`${p.Z.server.url}/api/users/login`, { email: h, password: k }, { withCredentials: !0 })
                  .then((t) => {
                    e();
                  })
                  .catch((t) => {
                    _(401 === t.response?.status);
                  });
            },
            [h, k],
          );
        return void 0 === t
          ? (0, c.tZ)('div', null, '로딩중...')
          : (t ? (console.log('주소:', m.env.PUBLIC_URL), w('/stock-record')) : console.log('여기2', t),
            (0, c.tZ)(
              n.Hf,
              null,
              (0, c.tZ)(n.h4, null, '주식 캘린더'),
              (0, c.tZ)(
                n.l0,
                { onSubmit: C },
                (0, c.tZ)(
                  n.__,
                  null,
                  (0, c.tZ)('span', null, '이메일 주소'),
                  (0, c.tZ)(
                    'div',
                    null,
                    (0, c.tZ)(n.II, { type: 'email', id: 'email', name: 'email', value: h, onChange: f }),
                  ),
                ),
                (0, c.tZ)(
                  n.__,
                  null,
                  (0, c.tZ)('span', null, '비밀번호'),
                  (0, c.tZ)(
                    'div',
                    null,
                    (0, c.tZ)(n.II, { type: 'password', id: 'password', name: 'password', value: k, onChange: g }),
                  ),
                  v && (0, c.tZ)(n.jj, null, '이메일과 비밀번호 조합이 일치하지 않습니다.'),
                ),
                (0, c.tZ)(n.Vm, { type: 'submit', color: '#60d6bf', marginBottom: '20px' }, '로그인'),
              ),
              (0, c.tZ)(n.l3, null, '아직 회원이 아니신가요? ', (0, c.tZ)(d.rU, { to: '/signup' }, '회원가입')),
            ));
      };
    },
  },
]);
