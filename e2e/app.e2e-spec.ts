import { PsurferPage } from './app.po';

describe('psurfer App', function() {
  let page: PsurferPage;

  beforeEach(() => {
    page = new PsurferPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
