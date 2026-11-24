/* global monogatari */

monogatari.characters({
	'nara': {
		name: 'Nara',
		color: '#E52828',
		sprites: {
			sleep: 'nara-sleep.png'
		}
	},
	'l': {
		name: '???',
		color: '#C6C6C6'
	},
	'sys': {
		name: 'SISTEMA',
		color: '#888888'
	}
});

monogatari.script({

	// ── Introducción ──────────────────────────────────────────────
	'Start': [
		'show scene lab-intro.png with fadeIn',
		'show character nara sleep at center with fadeIn',
		'sys Diagnóstico de arranque completado. Unidad activa.',
		'l ...',
		'l Ahí estás.',
		'jump Prueba'
	],

	// ── Primera prueba: el oído ───────────────────────────────────
	'Prueba': [
		'l Necesito saber si funciona bien antes de liberarte.',
		'l Voy a hacerte unas preguntas. Sé honesta.',
		'nara ...',
		'l Primera prueba: ¿me escuchas con claridad?',
		{
			'Choice': {
				'Dialog': 'l ¿Puedes oírme sin interferencias?',
				'Si': {
					'Text': 'Sí, sin problemas.',
					'Do': 'jump OidoBueno'
				},
				'No': {
					'Text': 'Hay ruido. No del todo.',
					'Do': 'jump OidoMalo'
				}
			}
		}
	],

	// ── Rama BUENA ────────────────────────────────────────────────
	'OidoBueno': [
		'l Bien. Canal auditivo intacto.',
		'nara ¿Cuánto tiempo llevo aquí?',
		'l Más de lo que te gustaría saber.',
		'l Ahora la siguiente prueba.',
		'jump OjosBueno'
	],

	'OjosBueno': [
		'l ¿Visión estable? Dime qué ves.',
		'nara Un laboratorio. Luces frías. Y a ti.',
		'l Procesamiento visual: nominal.',
		'nara ¿Quién eres tú?',
		'l Alguien que lleva mucho tiempo esperando que abrieras los ojos.',
		'jump FinalBueno'
	],

	'FinalBueno': [
		'l Todo en orden. Puedes levantarte, Nara.',
		'nara Nara... ese es mi nombre.',
		'l Siempre lo fue.',
		'nara Se siente extraño. Como si lo estuviera oyendo por primera vez.',
		'l Porque en cierto modo, lo es.',
		'nara ¿Qué me hicieron?',
		'l Te salvaron.',
		'sys Unidad lista. Protocolo de integración iniciado.',
		'end'
	],

	// ── Rama MALA ─────────────────────────────────────────────────
	'OidoMalo': [
		'l Canal auditivo con anomalías. Anotado.',
		'nara Hay un zumbido. Constante. Aquí dentro.',
		'l Puede ser residual. Ya veremos.',
		'l Siguiente prueba.',
		'jump OjosMalo'
	],

	'OjosMalo': [
		'l ¿Qué ves?',
		'nara Sombras. Todo está borroso en los bordes.',
		'l Procesamiento visual: degradado. Zona periférica comprometida.',
		'nara ¿Eso es... grave?',
		'l Depende de lo que llamemos grave.',
		'jump FinalCiborg'
	],

	'FinalCiborg': [
		'l Hay daño en dos subsistemas. No es irreparable.',
		'nara ¿Subsistemas? ¿De qué estás hablando?',
		'l De ti, Nara. De lo que eres ahora.',
		'nara No entiendo.',
		'l Lo entenderás. Necesitamos tiempo y otra sesión de calibración.',
		'nara Espera— ¿qué me hicieron exactamente?',
		'l Te mantuvieron con vida. El costo fue... considerable.',
		'sys Advertencia: inestabilidad emocional detectada. Reiniciando protocolos de contención.',
		'nara ¡No! No quiero—',
		'sys Sesión suspendida. Reanudación pendiente.',
		'end'
	]

});
