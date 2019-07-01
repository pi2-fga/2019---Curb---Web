export const MOCK = {
	curbs: [
		{
			id				: 1,
			cod  			: 1,
			key				: 1,
			link			: 'www.google.com.br/curb01',
			operating		: false,
			paint 			: 42.3,
			distance		: 12,
			battery			: 20,
			activedUser		: {
				id		: 1,
				name	: 'Thiago Felix',
				status	: true,
				cpf		: '45472166063',
			},
			monitoring		: [
				{
					id		: 1,
					isOn	: true,
					colision: false,
					lat		: -16.021276,
					long	: -48.0516422,
				},
				{
					id		: 2,
					isOn	: true,
					colision: false,
					lat		: -16.020836,
					long	: -48.0523492,
				},
				{
					id		: 3,
					isOn	: false,
					colision: false,
					lat		: -16.020424,
					long	: -48.0530542,
				}
			]
		},
		{
			id				: 2,
			cod  			: 2,
			key				: 2,
			link			: 'www.google.com.br/curb02',
			operating		: true,
			paint 			: 25.7,
			distance		: 4.9,
			battery			: 40,
			activedUser		: {
				id		: 1,
				name	: 'Thiago Felix',
				status	: true,
				cpf		: '45472166063',
			},
			monitoring		: [
				{
					id		: 1,
					isOn	: true,
					colision: false,
					lat		: -16.021276,
					long	: -48.0516422,
				},
				{
					id		: 2,
					isOn	: true,
					colision: false,
					lat		: -16.020836,
					long	: -48.0523492,
				},
				{
					id		: 3,
					isOn	: false,
					colision: false,
					lat		: -16.020424,
					long	: -48.0530542,
				}
			]
		},
		{
			id				: 3,
			cod  			: 3,
			key				: 3,
			link			: 'www.google.com.br/curb02',
			operating		: false,
			paint 			: 432.4,
			distance		: 178,
			battery			: 100,
			activedUser		: {
				id		: 2,
				name	: 'Victor Hugo',
				status	: true,
				cpf		: '71895203090',
			},
			monitoring		: [
				{
					id		: 1,
					isOn	: true,
					colision: false,
					lat		: -16.021276,
					long	: -48.0516422,
				},
				{
					id		: 2,
					isOn	: true,
					colision: false,
					lat		: -16.020836,
					long	: -48.0523492,
				},
				{
					id		: 3,
					isOn	: false,
					colision: false,
					lat		: -16.020424,
					long	: -48.0530542,
				}
			]
		},
		{
			id				: 4,
			cod  			: 4,
			key				: 4,
			link			: 'www.google.com.br/curb04',
			operating		: true,
			paint 			: 7.8,
			distance		: 3.2,
			battery			: 50,
			activedUser		: {
				id		: 2,
				name	: 'Fernando Gomes',
				status	: true,
				cpf		: '68069287063',
			},
			monitoring		: [
				{
					id		: 1,
					isOn	: true,
					colision: false,
					lat		: -16.021276,
					long	: -48.0516422,
				},
				{
					id		: 2,
					isOn	: true,
					colision: false,
					lat		: -16.020836,
					long	: -48.0523492,
				},
				{
					id		: 3,
					isOn	: false,
					colision: false,
					lat		: -16.020424,
					long	: -48.0530542,
				}
			]
		},
	]
}