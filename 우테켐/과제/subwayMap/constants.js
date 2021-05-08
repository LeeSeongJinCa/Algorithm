console.log("constants");

const stationsInitial = [
  "인천",
  "동인천",
  "도원",
  "소요산",
  "사당",
  "시청",
  "신도림",
  "대화",
  "오금",
  "오이도",
  "당고개",
];

const linesInitial = [
  {
    lineName: "1호선",
    line: ["인천", "소요산"],
  },
  {
    lineName: "2호선",
    line: ["시청", "신도림"],
  },
  {
    lineName: "3호선",
    line: ["대화", "오금"],
  },
];

export const stations = localStorage.getItem("stations") || stationsInitial;

export const lines = localStorage.getItem("lines") || linesInitial;

export const templates = {
  station: `<div>
    <label for="station-name-input">
      <p>역 이름</p>
      <input
        type="text"
        id="station-name-input"
        autofocus
        placeholder="역 이름을 입력해주세요."
      />
      <button id="station-add-button">역 추가</button>
    </label>
  </div>
  <div>
    <h3>🚉 지하철 역 목록</h3>
    <table>
      <thead>
        <tr>
          <th><span>역 이름</span></th>
          <th><span>설정</span></th>
        </tr>
      </thead>
      <tbody id="station-table"></tbody>
    </table>
  </div>`,
  line: `<label for="line-input">
    <p>노선 이름</p>
    <input
      type="text"
      id="line-input"
      placeholder="노선 이름을 입력하세요."
    />
  </label>
  <div>
    <br />
    <div>
      <strong>상행 종점</strong>
      <select id="line-start"></select>
    </div>
    <div>
      <strong>하행 종점</strong>
      <select id="line-end"></select>
    </div>
  </div>
  <br />
  <button id="line-add-button">노선 추가</button>
  <div>
    <h3>🚉 자하철 노선 목록</h3>
    <table>
      <tbody id="line-table">
        <tr>
          <th>노션 이름</th>
          <th>상행 종점역</th>
          <th>하행 종점역</th>
          <th>설정</th>
        </tr>
      </tbody>
    </table>
  </div>`,
  section: `<h3>구간을 수정할 노선을 선택해주세요.</h3>
  <div id="section-list"></div>
  <h3 id="section-title" class="hide">
    <span id="section-target"></span>
    <span>관리</span>
  </h3>
  <div id="section-apply" class="hide">
    <h4>구간 등록</h4>
    <div>
      <select id="section-select"></select>
      <input type="text" placeholder="순서" id="section-input" />
      <button id="section-add-button">등록</button>
    </div>
    <table>
      <tbody id="section-table">
        <tr>
          <th><span>순서</span></th>
          <th><span>이름</span></th>
          <th><span>설정</span></th>
        </tr>
      </tbody>
    </table>
  </div>`,
  mapPrint: `<div id="map-print-list"></div>`,
};
