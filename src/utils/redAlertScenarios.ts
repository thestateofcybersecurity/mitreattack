import { Scenario } from '@/types';

const redAlertScenarios: Record<string, Scenario> = {
  '1': {
    id: 101,
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
  '2': {
    id: 201,
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
  '3': {
    id: 301,
    name: "Red Alert: Detection Imminent",
    description: "Your last action has triggered security systems. Act fast to avoid detection!",
    phase: "initialAccess",
    choices: [
      {
        id: 'alert_1_initial',
        method: "Quickly cover your tracks",
        description: "Attempt to erase evidence of your presence in the system. This could involve deleting logs, removing malware, or hiding your network presence.",
        baseDifficulty: 15,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_initial',
        method: "Create a diversion",
        description: "Try to distract the security team by creating a false alarm elsewhere in the system. This could buy you time to complete your objectives.",
        baseDifficulty: 17,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_initial',
        method: "Attempt to bypass security",
        description: "Make a daring attempt to circumvent the triggered security measures. This is risky but could allow you to continue your operation undetected.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  '4': {
    id: 401,
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
  '5': {
    id: 501,
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
  '6': {
    id: 601,
    name: "Red Alert: Anti-Virus Alert Triggered",
    description: "The system's antivirus software has flagged your activity. You need to bypass it before you're caught.",
    phase: "privilegeEscalation",
    choices: [
      {
        id: 'alert_1_privesc',
        method: "Disable Antivirus",
        description: "Attempt to disable the antivirus software without triggering further alarms.",
        baseDifficulty: 20,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_privesc',
        method: "Encrypt Malicious Code",
        description: "Encrypt the malicious code to avoid detection by antivirus scans.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_privesc',
        method: "Escalate Privileges",
        description: "Attempt to escalate privileges to bypass antivirus restrictions.",
        baseDifficulty: 22,
        successRateModifier: 1,
      }
    ]
  },
  '7': {
    id: 701,
    name: "Red Alert: Defense Evasion Detected",
    description: "Your attempts to evade defenses have been noticed. Quick action is needed to maintain your cover.",
    phase: "defense-evasion",
    choices: [
      {
        id: 'alert_1_evasion',
        method: "Blend with System Processes",
        description: "Attempt to make your activities appear as normal system processes.",
        baseDifficulty: 19,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_evasion',
        method: "Use Rootkit Techniques",
        description: "Deploy rootkit-like techniques to hide your presence at a deeper level.",
        baseDifficulty: 21,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_evasion',
        method: "Trigger False Positives",
        description: "Flood the system with false positives to obscure your real activities.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  '8': {
    id: 801,
    name: "Red Alert: Suspicious Credential Dumping Detected",
    description: "The system has detected an unusual attempt to access credentials. Immediate response is necessary to avoid being traced.",
    phase: "credential-access",
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
  '9': {
    id: 901,
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
  '10': {
    id: 1001,
    name: "Red Alert: Suspicious Lateral Movement Detected",
    description: "The system has flagged an unusual attempt to move laterally within the network. Security teams are responding.",
    phase: "lateral-movement",
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
  '11': {
    id: 1101,
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
  '12': {
    id: 1201,
    name: "Red Alert: Command and Control Communication Detected",
    description: "Your Command and Control server's communication has been flagged by the target's security systems. Immediate action is needed to maintain control.",
    phase: "command-and-control",
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
  '13': {
    id: 1301,
    name: "Red Alert: Unusual Data Transfer Detected",
    description: "The system has flagged an abnormal data transfer. Security protocols are activating to lock down sensitive information.",
    phase: "exfiltration",
    choices: [
      {
        id: 'alert_1_exfil',
        method: "Compress and Encrypt",
        description: "Quickly compress and encrypt the data to make it look like normal traffic.",
        baseDifficulty: 16,
        successRateModifier: 1,
      },
      {
        id: 'alert_2_exfil',
        method: "Piggyback on Legitimate Traffic",
        description: "Hide your data transfer within legitimate network traffic to avoid detection.",
        baseDifficulty: 18,
        successRateModifier: 1,
      },
      {
        id: 'alert_3_exfil',
        method: "Distributed Exfiltration",
        description: "Split the data into smaller chunks and exfiltrate through multiple channels.",
        baseDifficulty: 20,
        successRateModifier: 1,
      }
    ]
  },
  '14': {
    id: 1401,
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
