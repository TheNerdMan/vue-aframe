<template>
	<div class="video">
		<a-scene environment>
			<a-entity id="boxGeometry" position="0 2.0 -1" rotation="45 45 0"
				geometry="primitive: box; height: 0.6; width: 0.6; depth: 0.6" material="color: #ff4b5c" size-change
				scale="0.5 0.5 0.5"></a-entity>
			<a-entity id="torusGeometry" position="0 2.0 -1" rotation="45 45 0"
				geometry="primitive: torus; radius: 0.4; radius-tubular: 0.06" material="color: #d2e603" size-change
				visible="false" scale="0.5 0.5 0.5"></a-entity>
			<a-entity id="sphereGeometry" position="0 2.0 -1" rotation="45 45 0"
				geometry="primitive: sphere; radius: 0.6;" material="color: #fcdab7" size-change visible="false"
				scale="0.5 0.5 0.5"></a-entity>
			<a-entity id="menu" menu position="0 1.5 -0.5" rotation="-45 0 0" event-manager>
				<a-entity slider position="0 0.10 0"></a-entity>
				<a-entity id="sphereButton" button="label: sphere" position="-0.15 0 0"></a-entity>
				<a-entity id="boxButton" button="label: box" position="0 0 0"></a-entity>
				<a-entity id="torusButton" button="label: torus" position="0.15 0 0"></a-entity>
				<a-entity id="darkModeButton" button="label: Dark Mode; width: 0.20; toggleable: true"
					position="0.15 -0.10 0"></a-entity>
				<a-entity id="exitButton" button="label: Exit;" position="-0.15 -0.10 0"></a-entity>
			</a-entity>
			<a-entity laser-controls="hand: left" hand-tracking-controls="hand: left"></a-entity>
			<a-entity laser-controls="hand: right" hand-tracking-controls="hand: right"></a-entity>
		</a-scene>
	</div>
</template>

<script>
import 'aframe';
import 'https://unpkg.com/aframe-environment-component@1.3.4/dist/aframe-environment-component.min.js';
import './scripts/button.js';
import './scripts/color-change.js';
import './scripts/event-manager.js';
import './scripts/menu.js';
import './scripts/pinchable.js';
import './scripts/pressable.js';
import './scripts/size-change.js';
import './scripts/slider.js';
export default {
	name: 'VR'
}
</script>

<script setup>
console.log("temp1");
</script>

<style lang="scss">
.video {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 800px;
	height: 400px;
	transform: translate(-50%, -50%);

	.a-canvas {
		width: 100% !important;
		height: 100% !important;
	}
}
</style>
