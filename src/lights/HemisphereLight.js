import { THREE } from '../Three';
import { THREE$Light } from './Light';
import { THREE$Color } from '../math/Color';

/**
 * @author alteredq / http://alteredqualia.com/
 */

function THREE$HemisphereLight ( skyColor, groundColor, intensity ) {

	THREE$Light.call( this, skyColor );

	this.type = 'HemisphereLight';

	this.position.set( 0, 100, 0 );

	this.groundColor = new THREE$Color( groundColor );
	this.intensity = ( intensity !== undefined ) ? intensity : 1;

};

THREE$HemisphereLight.prototype = Object.create( THREE$Light.prototype );
THREE$HemisphereLight.prototype.constructor = THREE$HemisphereLight;

THREE$HemisphereLight.prototype.clone = function () {

	var light = new THREE$HemisphereLight();

	THREE$Light.prototype.clone.call( this, light );

	light.groundColor.copy( this.groundColor );
	light.intensity = this.intensity;

	return light;

};


export { THREE$HemisphereLight };