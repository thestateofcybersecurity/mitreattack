import { Scenario } from '@/types';

export const scenarios = [
    {
        id: 1,
        name: "Initial Access",
        description: "Choose your method of gaining initial access to the target.",
        phase: 'initialAccess',
        choices: [
            {
                id: '1a',
                method: "Phishing",
                baseDifficulty: 3,
                successRateModifier: 0.9,
            },
            {
                id: '1b',
                method: "Drive-By Compromise",
                baseDifficulty: 5,
                successRateModifier: 0.7,
            },
            {
                id: '1c',
                method: "Supply Chain Compromise",
                baseDifficulty: 7,
                successRateModifier: 0.6,
            }
        ]
    },
    {
        id: 2,
        name: "Execution",
        description: "Choose your method of executing malicious code on the target system.",
        choices: [
            {
                method: "PowerShell",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'execution',
            },
            {
                method: "Scripting",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'execution',
            },
            {
                method: "Exploitation for Client Execution",
                baseDifficulty: 6,
                successRateModifier: 0.65,
                phase: 'execution',
            }
        ]
    },
    {
        id: 3,
        name: "Persistence",
        description: "Choose your method to maintain access to the target system.",
        choices: [
            {
                method: "Boot or Logon Autostart Execution",
                baseDifficulty: 5,
                successRateModifier: 0.8,
                phase: 'persistence',
            },
            {
                method: "Account Manipulation",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'persistence',
            },
            {
                method: "Scheduled Task/Job",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'persistence',
            }
        ]
    },
    {
        id: 4,
        name: "Privilege Escalation",
        description: "Choose your method of escalating privileges on the target system.",
        choices: [
            {
                method: "Exploitation for Privilege Escalation",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'privilegeEscalation',
            },
            {
                method: "Process Injection",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'privilegeEscalation',
            },
            {
                method: "Valid Accounts",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'privilegeEscalation',
            }
        ]
    },
    {
        id: 5,
        name: "Defense Evasion",
        description: "Choose your method to evade defenses on the target system.",
        choices: [
            {
                method: "Obfuscated Files or Information",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'defenseEvasion',
            },
            {
                method: "Disabling Security Tools",
                baseDifficulty: 7,
                successRateModifier: 0.6,
                phase: 'defenseEvasion',
            },
            {
                method: "Rootkit",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'defenseEvasion',
            }
        ]
    },
    {
        id: 6,
        name: "Credential Access",
        description: "Choose your method to gain access to credentials on the target system.",
        choices: [
            {
                method: "Brute Force",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'credentialAccess',
            },
            {
                method: "Credential Dumping",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'credentialAccess',
            },
            {
                method: "Password Spraying",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'credentialAccess',
            }
        ]
    },
    {
        id: 7,
        name: "Discovery",
        description: "Choose your method to discover information about the target environment.",
        choices: [
            {
                method: "Network Service Scanning",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'discovery',
            },
            {
                method: "Remote System Discovery",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'discovery',
            },
            {
                method: "System Information Discovery",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'discovery',
            }
        ]
    },
    {
        id: 8,
        name: "Lateral Movement",
        description: "Choose your method to move laterally within the target environment.",
        choices: [
            {
                method: "Pass the Hash",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'lateralMovement',
            },
            {
                method: "Remote Services",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'lateralMovement',
            },
            {
                method: "Tunneling Protocol",
                baseDifficulty: 7,
                successRateModifier: 0.65,
                phase: 'lateralMovement',
            }
        ]
    },
    {
        id: 9,
        name: "Collection",
        description: "Choose your method to gather information on the target system.",
        choices: [
            {
                method: "Data from Local System",
                baseDifficulty: 5,
                successRateModifier: 0.8,
                phase: 'collection',
            },
            {
                method: "Input Capture",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'collection',
            },
            {
                method: "Screen Capture",
                baseDifficulty: 4,
                successRateModifier: 0.85,
                phase: 'collection',
            }
        ]
    },
    {
        id: 10,
        name: "Exfiltration",
        description: "Choose your method to exfiltrate data from the target environment.",
        choices: [
            {
                method: "Automated Exfiltration",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'exfiltration',
            },
            {
                method: "Data Transfer Size Limits",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'exfiltration',
            },
            {
                method: "Exfiltration Over Alternative Protocol",
                baseDifficulty: 7,
                successRateModifier: 0.65,
                phase: 'exfiltration',
            }
        ]
    },
    {
        id: 11,
        name: "Impact",
        description: "Choose your method to impact the target environment.",
        choices: [
            {
                method: "Data Destruction",
                baseDifficulty: 7,
                successRateModifier: 0.6,
                phase: 'impact',
            },
            {
                method: "Defacement",
                baseDifficulty: 6,
                successRateModifier: 0.7,
                phase: 'impact',
            },
            {
                method: "Ransomware",
                baseDifficulty: 5,
                successRateModifier: 0.75,
                phase: 'impact',
            }
        ]
    }
];
