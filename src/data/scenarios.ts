import { Scenario } from '@/types';

const scenarios: Scenario[] = [
  {
    id: 1,
    name: "Initial Access",
    description: "You're starting your operation. How will you gain initial access to the target network?",
    phase: 'initialAccess',
    choices: [
      {
        id: '1a',
        method: "Phishing",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      },
      {
        id: '1b',
        method: "Exploit Public-Facing Application",
        baseDifficulty: 15,
        successRateModifier: 0.7,
      },
      {
        id: '1c',
        method: "Supply Chain Compromise",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 2,
    name: "Execution",
    description: "You've gained access. Now, how will you execute your payload?",
    phase: 'execution',
    choices: [
      {
        id: '2a',
        method: "Command and Scripting Interpreter",
        baseDifficulty: 14,
        successRateModifier: 0.8,
      },
      {
        id: '2b',
        method: "Native API",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '2c',
        method: "User Execution",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      }
    ]
  },
  {
    id: 3,
    name: "Persistence",
    description: "Establish a foothold. How will you maintain access to the system?",
    phase: 'persistence',
    choices: [
      {
        id: '3a',
        method: "Create Account",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      },
      {
        id: '3b',
        method: "Scheduled Task/Job",
        baseDifficulty: 14,
        successRateModifier: 0.8,
      },
      {
        id: '3c',
        method: "Bootkit",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 4,
    name: "Privilege Escalation",
    description: "Time to gain higher-level permissions. What's your approach?",
    phase: 'privilegeEscalation',
    choices: [
      {
        id: '4a',
        method: "Exploit Vulnerability",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '4b',
        method: "Access Token Manipulation",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '4c',
        method: "Sudo and Sudo Caching",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      }
    ]
  },
  {
    id: 5,
    name: "Defense Evasion",
    description: "The security team is onto you. How will you evade their defenses?",
    phase: 'defenseEvasion',
    choices: [
      {
        id: '5a',
        method: "Disable or Modify Tools",
        baseDifficulty: 15,
        successRateModifier: 0.75,
      },
      {
        id: '5b',
        method: "Obfuscated Files or Information",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '5c',
        method: "Rootkit",
        baseDifficulty: 18,
        successRateModifier: 0.5,
      }
    ]
  },
  {
    id: 6,
    name: "Credential Access",
    description: "You need valid credentials. How will you obtain them?",
    phase: 'credentialAccess',
    choices: [
      {
        id: '6a',
        method: "Brute Force",
        baseDifficulty: 14,
        successRateModifier: 0.8,
      },
      {
        id: '6b',
        method: "Credential Dumping",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '6c',
        method: "Steal or Forge Kerberos Tickets",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 7,
    name: "Discovery",
    description: "Explore the network. What's your method for gathering information?",
    phase: 'discovery',
    choices: [
      {
        id: '7a',
        method: "Network Service Scanning",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      },
      {
        id: '7b',
        method: "Remote System Discovery",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      },
      {
        id: '7c',
        method: "Permission Groups Discovery",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 8,
    name: "Lateral Movement",
    description: "Time to expand your reach. How will you move through the network?",
    phase: 'lateralMovement',
    choices: [
      {
        id: '8a',
        method: "Remote Services",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '8b',
        method: "Internal Spearphishing",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '8c',
        method: "Exploit Remote Services",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 9,
    name: "Collection",
    description: "Gather valuable data. What's your collection method?",
    phase: 'collection',
    choices: [
      {
        id: '9a',
        method: "Data from Local System",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      },
      {
        id: '9b',
        method: "Screen Capture",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      },
      {
        id: '9c',
        method: "Data from Network Shared Drive",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 10,
    name: "Exfiltration",
    description: "Time to get the data out. How will you exfiltrate it?",
    phase: 'exfiltration',
    choices: [
      {
        id: '10a',
        method: "Transfer Data to Cloud Account",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '10b',
        method: "Exfiltration Over Alternative Protocol",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '10c',
        method: "Exfiltration Over Physical Medium",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 11,
    name: "Impact",
    description: "Achieve your final objective. What's your endgame?",
    phase: 'impact',
    choices: [
      {
        id: '11a',
        method: "Data Destruction",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '11b',
        method: "Data Encryption for Impact",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      },
      {
        id: '11c',
        method: "Defacement",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 12,
    name: "Command and Control",
    description: "Establish command and control channels. How will you communicate with your assets?",
    phase: 'commandAndControl',
    choices: [
      {
        id: '12a',
        method: "Application Layer Protocol",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '12b',
        method: "Dynamic Resolution",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '12c',
        method: "Fallback Channels",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 13,
    name: "Reconnaissance",
    description: "Gathering information is key. What's your approach to reconnaissance?",
    phase: 'reconnaissance',
    choices: [
      {
        id: '13a',
        method: "Active Scanning",
        baseDifficulty: 3,
        successRateModifier: 0.9,
      },
      {
        id: '13b',
        method: "Search Open Websites/Domains",
        baseDifficulty: 2,
        successRateModifier: 0.95,
      },
      {
        id: '13c',
        method: "Search Open Technical Databases",
        baseDifficulty: 4,
        successRateModifier: 0.85,
      }
    ]
  },
  {
    id: 14,
    name: "Resource Development",
    description: "Develop or acquire the resources you need. What's your strategy?",
    phase: 'resourceDevelopment',
    choices: [
      {
        id: '14a',
        method: "Acquire Infrastructure",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '14b',
        method: "Compromise Accounts",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '14c',
        method: "Establish Accounts",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      }
    ]
  },
  {
    id: 15,
    name: "Impact",
    description: "You've infiltrated the target. How will you maximize the impact?",
    phase: 'impact',
    choices: [
      {
        id: '15a',
        method: "Data Manipulation",
        baseDifficulty: 15,
        successRateModifier: 0.75,
      },
      {
        id: '15b',
        method: "Defacement",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '15c',
        method: "Disk Wipe",
        baseDifficulty: 17,
        successRateModifier: 0.65,
      }
    ]
  },
  {
    id: 16,
    name: "Execution",
    description: "Your operations are ongoing. Choose how to continue executing your payload.",
    phase: 'execution',
    choices: [
      {
        id: '16a',
        method: "Container Administration Command",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '16b',
        method: "Deploy Container",
        baseDifficulty: 16,
        successRateModifier: 0.75,
      },
      {
        id: '16c',
        method: "Serverless Execution",
        baseDifficulty: 17,
        successRateModifier: 0.7,
      }
    ]
  },
  {
    id: 17,
    name: "Defense Evasion",
    description: "Keep avoiding detection. How will you evade defenses?",
    phase: 'defenseEvasion',
    choices: [
      {
        id: '17a',
        method: "Debugger Evasion",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '17b',
        method: "Obfuscated Files or Information",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      },
      {
        id: '17c',
        method: "Rootkit",
        baseDifficulty: 17,
        successRateModifier: 0.65,
      }
    ]
  },
  {
    id: 18,
    name: "Credential Access",
    description: "Need more access? What will you do to acquire more credentials?",
    phase: 'credentialAccess',
    choices: [
      {
        id: '18a',
        method: "Credentials from Password Stores",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '18b',
        method: "Steal or Forge Kerberos Tickets",
        baseDifficulty: 17,
        successRateModifier: 0.65,
      },
      {
        id: '18c',
        method: "Steal Application Access Token",
        baseDifficulty: 15,
        successRateModifier: 0.75,
      }
    ]
  }
];

export default scenarios;
