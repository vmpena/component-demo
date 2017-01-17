import { ComponentDemosPage } from './app.po';

describe('component-demos App', function() {
  let page: ComponentDemosPage;

  beforeEach(() => {
    page = new ComponentDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
