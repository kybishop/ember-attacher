import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | ember attacher', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <div>
        {{#attach-popover id='attachment'}}
          popper text
        {{/attach-popover}}
      </div>
    `);

    const attachment = find('#attachment');

    assert.ok(find('div[x-circle]', attachment), 'div[x-circle] exists');

    assert.ok(attachment.innerHTML.indexOf('popper text') !== -1);
  });
});
