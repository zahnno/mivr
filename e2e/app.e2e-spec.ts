import { MivrPage } from './app.po';

describe('mivr App', () => {
  let page: MivrPage;

  beforeEach(() => {
    page = new MivrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
