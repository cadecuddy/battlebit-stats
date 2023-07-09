export type ClassWeaponConfig = Record<string, Array<string>>

export interface ClassConfig {
  name: string
  description?: string
  imageName?: string
  demoWeapon: string
  weapons: ClassWeaponConfig
}

export interface WeaponConfig {
  weaponType: string
  name: string
  imageName: string
  hasModel?: boolean
  modelFov?: number
  unlockLevel?: number
}

export const weapons: Record<string, WeaponConfig> = {
  AK74: {
    name: 'AK-74',
    imageName: 'AK74',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 0
  },
  M4A1: {
    name: 'M4A1',
    imageName: 'M4A1',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 0
  },
  AK15: {
    name: 'AK-15',
    imageName: 'AK15',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 15
  },
  AUGA3: {
    name: 'AUG-A3',
    imageName: 'AUGA3',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 75
  },
  SG550: {
    name: 'SG 550',
    imageName: 'SG550',
    hasModel: true,
    modelFov: 3.5,
    weaponType: 'automatic-rifles',
    unlockLevel: 80
  },
  FAMAS: {
    name: 'FAMAS',
    imageName: 'FAMAS',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 95
  },
  ACR: {
    name: 'ACR',
    imageName: 'ACR',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 110
  },
  G36C: {
    name: 'G36C',
    imageName: 'G36C',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 120
  },
  HK419: {
    name: 'HK-419',
    imageName: 'HK419',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 135
  },
  FAL: {
    name: 'FAL',
    imageName: 'FAL',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 140
  },
  AK5C: {
    name: 'AK5C',
    imageName: 'AK5C',
    hasModel: true,
    modelFov: 5,
    weaponType: 'automatic-rifles',
    unlockLevel: 145
  },
  'Scar-H': {
    name: 'SCAR-H',
    imageName: 'Scar-H',
    hasModel: true,
    modelFov: 4,
    weaponType: 'automatic-rifles',
    unlockLevel: 50
  },
  MP7: {
    name: 'MP7',
    imageName: 'MP7',
    hasModel: true,
    modelFov: 4,
    weaponType: 'submachine-guns',
    unlockLevel: 0
  },
  UMP45: {
    name: 'UMP-45',
    imageName: 'UMP45',
    hasModel: true,
    modelFov: 4,
    weaponType: 'submachine-guns',
    unlockLevel: 0
  },
  PP2000: {
    name: 'PP-2000',
    imageName: 'PP2000',
    hasModel: true,
    modelFov: 3.5,
    weaponType: 'submachine-guns',
    unlockLevel: 25
  },
  PP19: {
    name: 'PP-19',
    imageName: 'PP19',
    hasModel: true,
    modelFov: 3.5,
    weaponType: 'submachine-guns',
    unlockLevel: 45
  },
  KrissVector: {
    name: 'Kriss Vector',
    imageName: 'KrissVector',
    hasModel: true,
    modelFov: 4,
    weaponType: 'submachine-guns',
    unlockLevel: 70
  },
  MP5: {
    name: 'MP5',
    imageName: 'MP5',
    hasModel: true,
    modelFov: 4.5,
    weaponType: 'submachine-guns',
    unlockLevel: 90
  },
  MK20: {
    name: 'MK-20',
    imageName: 'MK20',
    hasModel: true,
    modelFov: 4,
    weaponType: 'marksman-rifles',
    unlockLevel: 10
  },
  M110: {
    name: 'M110',
    imageName: 'M110',
    hasModel: true,
    modelFov: 4,
    weaponType: 'marksman-rifles',
    unlockLevel: 40
  },
  SVD: {
    name: 'SVD',
    imageName: 'SVD',
    hasModel: true,
    modelFov: 4,
    weaponType: 'marksman-rifles',
    unlockLevel: 115
  },
  MK14: {
    name: 'MK-14 EBR',
    imageName: 'MK14',
    hasModel: true,
    modelFov: 4,
    weaponType: 'marksman-rifles',
    unlockLevel: 60
  },
  HoneyBadger: {
    name: 'Honey Badger',
    imageName: 'HoneyBadger',
    hasModel: true,
    modelFov: 3.5,
    weaponType: 'personal-defence',
    unlockLevel: 35
  },
  P90: {
    name: 'P90',
    imageName: 'P90',
    hasModel: true,
    modelFov: 3,
    weaponType: 'personal-defence',
    unlockLevel: 125
  },
  GROZA: {
    name: 'GROZA',
    imageName: 'GROZA',
    hasModel: true,
    modelFov: 4,
    weaponType: 'personal-defence',
    unlockLevel: 55
  },
  ASVAL: {
    name: 'AS VAL',
    imageName: 'ASVAL',
    hasModel: true,
    modelFov: 3.5,
    weaponType: 'carbines',
    unlockLevel: 105
  },
  ScorpionEVO: {
    name: 'ScorpionEVO',
    imageName: 'ScorpionEVO',
    hasModel: true,
    modelFov: 4,
    weaponType: 'carbines',
    unlockLevel: 150
  },
  L86A1: {
    name: 'L86A1',
    imageName: 'L86A1',
    hasModel: true,
    modelFov: 6,
    weaponType: 'light-support-guns',
    unlockLevel: 0
  },
  MG36: {
    name: 'MG36',
    imageName: 'MG36',
    hasModel: true,
    modelFov: 6,
    weaponType: 'light-support-guns',
    unlockLevel: 50
  },
  M249: {
    name: 'M249',
    imageName: 'M249',
    hasModel: true,
    modelFov: 6,
    weaponType: 'light-machine-guns',
    unlockLevel: 20
  },
  Ultimax100: {
    name: 'Ultimax100',
    imageName: 'Ultimax100',
    hasModel: true,
    modelFov: 6,
    weaponType: 'light-machine-guns',
    unlockLevel: 100
  },
  SSG69: {
    name: 'SSG 69',
    imageName: 'SSG69',
    hasModel: true,
    modelFov: 6,
    weaponType: 'sniper-rifles',
    unlockLevel: 0
  },
  SV98: {
    name: 'SV-98',
    imageName: 'SV98',
    hasModel: true,
    modelFov: 6,
    weaponType: 'sniper-rifles',
    unlockLevel: 30
  },
  L96: {
    name: 'L96',
    imageName: 'L96',
    hasModel: true,
    modelFov: 6,
    weaponType: 'sniper-rifles',
    unlockLevel: 65
  },
  M200: {
    name: 'M200',
    imageName: 'M200',
    hasModel: true,
    modelFov: 6,
    weaponType: 'sniper-rifles',
    unlockLevel: 100
  },
  MSR: {
    name: 'MSR',
    imageName: 'MSR',
    hasModel: true,
    modelFov: 6,
    weaponType: 'sniper-rifles',
    unlockLevel: 130
  },
  REM700: {
    name: 'REM-700',
    imageName: 'REM700',
    hasModel: true,
    modelFov: 6,
    weaponType: 'sniper-rifles',
    unlockLevel: 85
  },
  M9: {
    name: 'M9',
    imageName: 'M9',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 0
  },
  MP443: {
    name: 'MP443',
    imageName: 'M9',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 0
  },
  USP: {
    name: 'USP',
    imageName: 'USP',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 60
  },
  UNICA: {
    name: 'UNICA',
    imageName: 'UNICA',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 40
  },
  GLOCK18: {
    name: 'GLOCK 18',
    imageName: 'GLOCK18',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 80
  },
  'DESERT-EAGLE': {
    name: 'Desert Eagle',
    imageName: 'DESERT-EAGLE',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 100
  },
  RSH12: {
    name: 'RSH12',
    imageName: 'RSH12',
    hasModel: true,
    modelFov: 2.5,
    weaponType: 'pistols',
    unlockLevel: 100
  },
  Pickaxe: {
    name: 'Pickaxe',
    imageName: 'Pickaxe',
    unlockLevel: 0,
    weaponType: 'misc'
  },
  Sledgehammer: {
    name: 'Sledgehammer',
    imageName: 'Sledgehammer',
    unlockLevel: 0,
    weaponType: 'misc'
  }
}

const automatic_rifles = [
  'M4A1',
  'AK74',
  'AK15',
  'Scar-H',
  'AUGA3',
  'SG550',
  'FAMAS',
  'ACR',
  'G36C',
  'HK419',
  'FAL',
  'AK5C'
]
const marksman_rifles = ['MK20', 'M110', 'MK14', 'SVD']
const pistols = ['M9', 'MP443', 'UNICA', 'USP', 'GLOCK18', 'DESERT-EAGLE', 'RSH12']
const sniper_rifles = ['SSG69', 'SV98', 'L96', 'REM700', 'M200', 'MSR']
const submachineguns = ['MP7', 'UMP45', 'PP2000', 'PP19', 'KrissVector', 'MP5']
const personal_defence = ['HoneyBadger', 'GROZA', 'P90']
const carbines = ['ASVAL', 'ScorpionEVO']
const light_support_guns = ['L86A1', 'MG36']
const light_machine_guns = ['M249', 'Ultimax100']

export const classes: Record<string, ClassConfig> = {
  leader: {
    name: 'Leader',
    description: 'Leader',
    imageName: 'leader',
    demoWeapon: 'Scar-H',
    weapons: {
      'automatic-rifles': automatic_rifles,
      'marksman-rifles': marksman_rifles,
      pistols
    }
  },
  assault: {
    name: 'Assault',
    description: 'Assault',
    imageName: 'assault',
    demoWeapon: 'M4A1',
    weapons: {
      'automatic-rifles': automatic_rifles,
      pistols
    }
  },
  medic: {
    name: 'Medic',
    description: 'Healz',
    imageName: 'medic',
    demoWeapon: 'HoneyBadger',
    weapons: {
      'automatic-rifles': automatic_rifles,
      'submachine-guns': submachineguns,
      'personal-defence': personal_defence,
      carbines,
      pistols
    }
  },
  engineer: {
    name: 'Engineer',
    description: 'Engineer',
    imageName: 'engineer',
    demoWeapon: 'UMP45',
    weapons: {
      'automatic-rifles': automatic_rifles,
      'submachine-guns': submachineguns,
      'personal-defence': personal_defence,
      'marksman-rifles': marksman_rifles,
      carbines,
      pistols
    }
  },
  support: {
    name: 'Support',
    description: 'Support',
    imageName: 'support',
    demoWeapon: 'M249',
    weapons: {
      'light-support-guns': light_support_guns,
      'light-machine-guns': light_machine_guns,
      pistols
    }
  },
  recon: {
    name: 'Recon',
    description: 'Recon',
    imageName: 'recon',
    demoWeapon: 'L96',
    weapons: {
      'sniper-rifles': sniper_rifles,
      'marksman-rifles': marksman_rifles,
      pistols
    }
  }
}
