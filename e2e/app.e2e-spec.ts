import { LearningAngulerPage } from './app.po';

describe('learning-anguler App', function() {
  let page: LearningAngulerPage;

  beforeEach(() => {
    page = new LearningAngulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
