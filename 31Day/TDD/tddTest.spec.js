
// 테스트 유닛들의 모음
describe('자스민 테스트입니다.', () => {
    // 테스트 유닛입니다.
    it('덧셈을 하는 함수입니다.', () => {
        let num =  10; 

        // expect : 실행할 함수의 결과값을 인수로 전달합니다. (기대식)
        // toBe : 내가 기대한 결과가 일치하는지 판단하는 함수입니다.
        expect(plusOne(num)).toBe(num + 1);
    })
})