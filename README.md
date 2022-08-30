# myroom - list

## 1. 보관함
- 폴더위치 : /myroom/library/list/collection
- url : /library/list/collection/보관함번호
- 설명 : 해당 보관함에 있는 상품을 출력한다

- 파일

  -- index.js
  
  : 상품/컨텐츠 추가 팝업 -  공통 상품 추가 팝업 사용
```javasscript 
   new ProductSearchItem(this, { id: 'popProdSearch', type: 'sentence' }) // 상품추가팝업
   
   // 상품추가 팝업에서 선택 버튼 클릭 시
   set getParentList (data) {
    this._getParentList = data
    console.log(this._getParentList)
    const { id, title, dvsnCode } = this._getParentList
    const setDvsnCode = dvsnCode === 'EBK' ? '002' : '001' // dvsncode로 구분 중
    const params = [{
      stbxNum: [this.pageId],
      saleCmdtid: id,
      cmdtName: title.replace(/<[^>]*>?/g, ''),
      myrmDvsnCode: dvsnCode,
      buyYsno: this._bscStbxYsno,
      sameCmdtLastOrdrId: setDvsnCode
    }]
    this.saveListItem(params, setDvsnCode) // 상품 저장
  }
```
  -- collection-dom.js : 보관함 관련 DOM 관련 파일

  -- popup-control.js : 리트명수정, 리스트 삭제, 상품 삭제 관련 파일
<hr/>

## 2. 보관함 상세 페이지
- 폴더위치 : /myroom/library/list/detail
- url : /library/list/detail/상품아이디
- 설명 : 보관함에 있는 상품에 대한 세부 사항을 출력한다
- 파일

 -- detail.js : 상세 페이지 전반적이 내용 정의

 -- detail-dom.js : 상세페이지 DOM 관련

 -- comment.js : 코멘트 - 전반적인 기능은 공통 코멘트와 같고 퍼블리싱만 다름  

 -- constant.js : 보관함 유형에 따른 탭 명, 썸네일 class name 정의

 -- date-picker.js : 독서 history에 따른 날짜 datepicker 설정 및 날짜 선택시 이벤트 정의

 -- package.js : 보관함유형이 패키지일 경우 DOM 출력에 관한 내용 정의

 -- reading-dom-2.js : 보관함 유형이 종이책, ebook, 동영상일 경우 dom 관련 내용

 -- sentence.js : 문장수집 - 전반적인 기능은 공통으로 사용되는 문장수집과 같음

 -- review.js : 클로버 리뷰 - @조상혁 과장님께 요청한 상태










