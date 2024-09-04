const redAlertScenarios: Record<string, Scenario> = {
  'reconnaissance': {
    id: 401,
    name: "Red Alert: Suspicious Network Scanning Detected",
    description: "The target's system has detected abnormal network scanning activity. Security measures are kicking in.",
    phase: "reconnaissance",
    choices: [
      {
        id: 'alert_1_recon',
        method: "Slow Down Scanning",
        description: "Reduce the frequency of your scans to avoid triggering further alarms.",
        baseDifficulty: 14,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_recon',
        method: "Switch to Passive Recon",
        description: "Stop active scanning and attempt to gather information through passive means.",
        baseDifficulty: 16,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_recon',
        method: "Abort Reconnaissance",
        description: "Immediately stop the reconnaissance attempt and delete any logs of your presence.",
        baseDifficulty: 18,
        successRateModifier: 1,
      }
    ]
  },
  'resource-development': {
    id: 402,
    name: "Red Alert: Unauthorized Resource Creation",
    description: "The target's infrastructure has flagged suspicious resource development activities. Immediate action is required to cover your tracks.",
    phase: "resourceDevelopment",
    choices: [
      {
        id: 'alert_1_resource',
        method: "Spoof Legitimate User",
        description: "Create resources under the guise of a legitimate user to avoid suspicion.",
        baseDifficulty: 15,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_resource',
        method: "Delete Evidence",
        description: "Quickly delete the evidence of your resource creation activities.",
        baseDifficulty: 17,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_resource',
        method: "Pivot to New Infrastructure",
        description: "Abandon the current resources and pivot to new, unmonitored infrastructure.",
        baseDifficulty: 19,
        successRateModifier: 1,
      }
    ]
  },
  'execution': {
    id: 403,
    name: "Red Alert: Malicious Code Execution Detected",
    description: "Security systems have detected unauthorized code execution. You must react quickly to avoid being shut down.",
    phase: "execution",
    choices: [
      {
        id: 'alert_1_execution',
        method: "Obfuscate Code",
        description: "Obfuscate your code to make it appear benign to the system's security.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_execution',
        method: "Terminate Process",
        description: "Immediately terminate the process and remove traces of the executed code.",
        baseDifficulty: 16,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_execution',
        method: "Mimic Legitimate Service",
        description: "Modify the code to make it mimic a legitimate service running on the system.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  'persistence': {
    id: 404,
    name: "Red Alert: Persistent Backdoor Detected",
    description: "A backdoor you installed has been detected by the security team. You need to secure your access or lose it.",
    phase: "persistence",
    choices: [
      {
        id: 'alert_1_persistence',
        method: "Deploy Alternate Backdoor",
        description: "Quickly deploy a secondary backdoor to maintain access.",
        baseDifficulty: 19,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_persistence',
        method: "Hide in System Processes",
        description: "Blend your backdoor into legitimate system processes to evade detection.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_persistence',
        method: "Self-Destruct and Rebuild Later",
        description: "Destroy the backdoor and plan to rebuild it later when things cool down.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  'defense-evasion': {
    id: 405,
    name: "Red Alert: Anti-Virus Alert Triggered",
    description: "The system's antivirus software has flagged your activity. You need to bypass it before you're caught.",
    phase: "defenseEvasion",
    choices: [
      {
        id: 'alert_1_defense',
        method: "Disable Antivirus",
        description: "Attempt to disable the antivirus software without triggering further alarms.",
        baseDifficulty: 20,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_defense',
        method: "Encrypt Malicious Code",
        description: "Encrypt the malicious code to avoid detection by antivirus scans.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_defense',
        method: "Whitelist Yourself",
        description: "Add your process to the whitelist to evade further scrutiny.",
        baseDifficulty: 21,
        successRateModifier: 1,
      }
    ]
  },
  'credential-access': {
    id: 406,
    name: "Red Alert: Suspicious Credential Dumping Detected",
    description: "The system has detected an unusual attempt to access credentials. Immediate response is necessary to avoid being traced.",
    phase: "credentialAccess",
    choices: [
      {
        id: 'alert_1_credential',
        method: "Wipe Access Logs",
        description: "Quickly wipe the logs of your credential access attempts to remove any traces.",
        baseDifficulty: 17,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_credential',
        method: "Switch to Keylogging",
        description: "Stop dumping credentials and instead switch to a more discreet keylogger.",
        baseDifficulty: 19,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_credential',
        method: "Spoof Authentication",
        description: "Create spoofed authentication tokens to avoid detection.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  'discovery': {
    id: 407,
    name: "Red Alert: Unauthorized System Scan Detected",
    description: "Your system scanning activity has been detected. Act fast to avoid raising further alarms.",
    phase: "discovery",
    choices: [
      {
        id: 'alert_1_discovery',
        method: "Stop Scanning and Hide",
        description: "Immediately stop scanning and hide your presence.",
        baseDifficulty: 16,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_discovery',
        method: "Mimic Legitimate Tool",
        description: "Modify your scanning tool to mimic a legitimate system diagnostic tool.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_discovery',
        method: "Obfuscate Scan Results",
        description: "Obfuscate the results of your scans to make them appear benign.",
        baseDifficulty: 19,
        successRateModifier: 1,
      }
    ]
  },
  'lateral-movement': {
    id: 408,
    name: "Red Alert: Suspicious Lateral Movement Detected",
    description: "The system has flagged an unusual attempt to move laterally within the network. Security teams are responding.",
    phase: "lateralMovement",
    choices: [
      {
        id: 'alert_1_lateral',
        method: "Use a Hidden Admin Account",
        description: "Attempt to continue lateral movement using a previously hidden admin account.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_lateral',
        method: "Jump Through Multiple Hosts",
        description: "Move through several hosts in quick succession to throw off the security team's tracking.",
        baseDifficulty: 20,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_lateral',
        method: "Disable Network Alerts",
        description: "Attempt to disable network monitoring systems temporarily to avoid detection.",
        baseDifficulty: 21,
        successRateModifier: 1,
      }
    ]
  },
  'collection': {
    id: 409,
    name: "Red Alert: Data Collection Detected",
    description: "The system has detected unusual file access patterns consistent with data collection activities. You must act now to avoid lockdown.",
    phase: "collection",
    choices: [
      {
        id: 'alert_1_collection',
        method: "Mask File Access",
        description: "Mask your file access as part of a legitimate backup process.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_collection',
        method: "Throttle Data Collection",
        description: "Slow down your data collection to fly under the radar.",
        baseDifficulty: 16,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_collection',
        method: "Use Encrypted Storage",
        description: "Store the collected data in an encrypted format to avoid detection.",
        baseDifficulty: 19,
        successRateModifier: 1,
      }
    ]
  },
  'command-and-control': {
    id: 410,
    name: "Red Alert: Command and Control Communication Detected",
    description: "Your Command and Control server's communication has been flagged by the target's security systems. Immediate action is needed to maintain control.",
    phase: "commandAndControl",
    choices: [
      {
        id: 'alert_1_c2',
        method: "Switch Communication Protocol",
        description: "Switch to an alternate, less monitored communication protocol to continue operations.",
        baseDifficulty: 19,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_c2',
        method: "Encrypt Traffic",
        description: "Encrypt your Command and Control traffic to avoid detection by the security team.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_c2',
        method: "Use a Proxy",
        description: "Route your communications through multiple proxy servers to make it harder for the security team to trace.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  'impact': {
    id: 411,
    name: "Red Alert: Malicious System Change Detected",
    description: "The system has flagged unauthorized changes that could disrupt operations. Security teams are deploying countermeasures to undo your work.",
    phase: "impact",
    choices: [
      {
        id: 'alert_1_impact',
        method: "Rollback and Retry",
        description: "Temporarily rollback your changes to avoid detection and plan for a retry later.",
        baseDifficulty: 17,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_impact',
        method: "Disguise as System Update",
        description: "Disguise your malicious changes as part of a legitimate system update.",
        baseDifficulty: 20,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_impact',
        method: "Delete Logs",
        description: "Delete all evidence of your activity from system logs before security teams can trace it.",
        baseDifficulty: 18,
        successRateModifier: 1,
      }
    ]
  }
};

export default redAlertScenarios;
