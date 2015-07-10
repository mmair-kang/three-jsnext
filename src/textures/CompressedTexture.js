import { THREE } from '../Three';
import { THREE$Texture } from './Texture';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$CompressedTexture ( mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy ) {

	THREE$Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.image = { width: width, height: height };
	this.mipmaps = mipmaps;

	// no flipping for cube textures
	// (also flipping doesn't work for compressed textures )

	this.flipY = false;

	// can't generate mipmaps for compressed textures
	// mips must be embedded in DDS files

	this.generateMipmaps = false;

};

THREE$CompressedTexture.prototype = Object.create( THREE$Texture.prototype );
THREE$CompressedTexture.prototype.constructor = THREE$CompressedTexture;

THREE$CompressedTexture.prototype.clone = function () {

	var texture = new THREE$CompressedTexture();

	THREE$Texture.prototype.clone.call( this, texture );

	return texture;

};


export { THREE$CompressedTexture };