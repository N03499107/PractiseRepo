import { WhatDoYouMeme1Page } from './app.po';

describe('what-do-you-meme1 App', function() {
  let page: WhatDoYouMeme1Page;

  beforeEach(() => {
    page = new WhatDoYouMeme1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
