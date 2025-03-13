/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

  attributes: {
    inputText:     { type: 'string' }
  },

  edit: (props) => {

      function updateAttributes(event) {
          let targetField = {};
          targetField[event.target.id] = event.target.value;
          props.setAttributes( targetField )
      }

      return (
        <div { ...useBlockProps() }>
          <div className="components-placeholder">
            <div className="components-placeholder__label">{ metadata.title }</div>
            <div>
              <label>Text Field</label><br />
              <input type="text" id="inputText" placeholder="Your Text" value={props.attributes.inputText} onChange={updateAttributes} />
            </div>
          </div>
        </div>
      );
        
  },

  save: (props) => {

      return (
            <div>{ props.attributes.inputText }</div>
      );

  }

} );