import { Scenario } from '@/types';

const scenarios: Scenario[] = [
{
    id: 1,
    name: "Reconnaissance",
    description: "Gathering information is key to understanding your target. Which reconnaissance technique will you use?",
    phase: 'reconnaissance',
    choices: [
      {
        id: 'T1595',
        method: "Active Scanning",
        description: "Adversaries may execute active reconnaissance scans to gather information that can be used during targeting. Active scans involve probing victim infrastructure via network traffic.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1595.001',
        method: "Scanning IP Blocks",
        description: "Adversaries may scan victim IP blocks to gather information that can be used during targeting. Public IP addresses may be allocated to organizations by block.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1595.002',
        method: "Vulnerability Scanning",
        description: "Adversaries may scan victims for vulnerabilities that can be used during targeting. Vulnerability scans typically check if the configuration of a target host/application aligns with a specific exploit.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1595.003',
        method: "Wordlist Scanning",
        description: "Adversaries may iteratively probe infrastructure using brute-forcing and crawling techniques, often to identify content and infrastructure rather than valid credentials.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1592',
        method: "Gather Victim Host Information",
        description: "Adversaries may gather information about the victim's hosts, such as administrative data (name, assigned IP, functionality) or specifics about its configuration (OS, language, etc.).",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1592.001',
        method: "Gather Victim Host Hardware Information",
        description: "Adversaries may gather information about the victim's host hardware, such as types and versions of hardware on specific hosts, which might indicate defensive protections.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1592.002',
        method: "Gather Victim Host Software Information",
        description: "Adversaries may gather information about the victim's host software, such as types and versions of installed software, which might indicate defensive protections.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1592.003',
        method: "Gather Victim Host Firmware Information",
        description: "Adversaries may gather information about the victim's host firmware, such as type and versions on specific hosts, to infer more details about host configurations and purposes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1592.004',
        method: "Gather Victim Client Configuration Information",
        description: "Adversaries may gather information about the victim's client configurations, including OS version, virtualization, architecture, language, and time zone.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1589',
        method: "Gather Victim Identity Information",
        description: "Adversaries may gather information about the victim's identity, including personal data, credentials, and multi-factor authentication configurations.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1589.001',
        method: "Gather Victim Credentials",
        description: "Adversaries may gather credentials that can be used during targeting, potentially exploiting the tendency of users to reuse passwords across personal and business accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1589.002',
        method: "Gather Victim Email Addresses",
        description: "Adversaries may gather email addresses that can be used during targeting, exploiting public-facing email infrastructure and addresses for employees.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1589.003',
        method: "Gather Victim Employee Names",
        description: "Adversaries may gather employee names that can be used during targeting, potentially deriving email addresses and guiding other reconnaissance efforts.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1590',
        method: "Gather Victim Network Information",
        description: "Adversaries may gather information about the victim's networks, including administrative data, IP ranges, domain names, and network topology.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1590.001',
        method: "Gather Victim Domain Properties",
        description: "Adversaries may gather information about the victim's network domains, including administrative data and actionable information such as contacts and name servers.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1590.002',
        method: "Gather Victim DNS Information",
        description: "Adversaries may gather information about the victim's DNS, including records that outline addressing for subdomains, mail servers, and other hosts.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1590.003',
        method: "Gather Victim Network Trust Dependencies",
        description: "Adversaries may gather information about the victim's network trust dependencies, including connected organizations with potentially elevated network access.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1590.004',
        method: "Gather Victim Network Topology",
        description: "Adversaries may gather information about the victim's network topology, including the physical and/or logical arrangement of both external-facing and internal network environments.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1590.005',
        method: "Gather Victim IP Addresses",
        description: "Adversaries may gather the victim's IP addresses to derive other details about the victim, such as organizational size, physical location, and infrastructure hosting.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1590.006',
        method: "Gather Victim Network Security Appliance Information",
        description: "Adversaries may gather information about the victim's network security appliances, including firewalls, content filters, and proxies.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1591',
        method: "Gather Victim Organization Information",
        description: "Adversaries may gather information about the victim's organization, including business operations and roles of key employees.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1591.001',
        method: "Determine Victim Physical Locations",
        description: "Adversaries may gather information about the victim's physical locations, such as where key resources and infrastructure are housed.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1591.002',
        method: "Gather Victim Business Relationships",
        description: "Adversaries may gather information about the victim's business relationships, revealing supply chains and shipment paths for the victim’s hardware and software resources.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
    id: 'T1591.003',
        method: "Identify Victim Business Tempo",
        description: "Adversaries may gather information about the victim's business tempo, including operational hours, purchase times, and shipment dates.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1591.004',
        method: "Identify Victim Roles",
        description: "Adversaries may gather information about roles within the victim organization, including key personnel and what data/resources they have access to.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598',
        method: "Phishing for Information",
        description: "Adversaries may send phishing messages to elicit sensitive information that can be used during targeting, such as credentials or other actionable information.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1598.001',
        method: "Spearphishing via Service",
        description: "Adversaries may send spearphishing messages via third-party services to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598.002',
        method: "Spearphishing via Attachment",
        description: "Adversaries may send spearphishing messages with a malicious attachment to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598.003',
        method: "Spearphishing via Link",
        description: "Adversaries may send spearphishing messages with a malicious link to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598.004',
        method: "Spearphishing via Voice",
        description: "Adversaries may use voice communications to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1597',
        method: "Search Closed Sources",
        description: "Adversaries may search and gather information about victims from closed sources that can be used during targeting, such as private databases or dark web markets.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1597.001',
        method: "Search Threat Intel Vendors",
        description: "Adversaries may search private data from threat intelligence vendors for information that can be used during targeting, such as trends regarding breaches.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1597.002',
        method: "Purchase Technical Data",
        description: "Adversaries may purchase technical information about victims from private databases or dark web markets, which can be used during targeting.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1596',
        method: "Search Open Technical Databases",
        description: "Adversaries may search freely available technical databases for information about victims that can be used during targeting, such as domain registrations and network data.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1596.001',
        method: "Search DNS/Passive DNS",
        description: "Adversaries may search DNS data for information about victims, including name servers and records that outline addressing for subdomains and mail servers.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1596.002',
        method: "Search WHOIS",
        description: "Adversaries may search public WHOIS data for information about victims, such as assigned IP blocks, contact information, and DNS nameservers.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1596.003',
        method: "Search Digital Certificates",
        description: "Adversaries may search public digital certificate data for information about victims, such as those used for HTTPS SSL/TLS communications.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1596.004',
        method: "Search CDNs",
        description: "Adversaries may search content delivery network (CDN) data about victims, which may reveal how content is hosted and distributed.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1596.005',
        method: "Search Public Scan Databases",
        description: "Adversaries may search within public scan databases for information about victims, such as active IP addresses, hostnames, and open ports.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1593',
        method: "Search Open Websites/Domains",
        description: "Adversaries may search freely available websites and/or domains for information about victims, such as social media, news sites, or business operations.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1593.001',
        method: "Search Social Media",
        description: "Adversaries may search social media for information about victims, such as business announcements and employee information.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1593.002',
        method: "Use Search Engines",
        description: "Adversaries may use search engines to collect information about victims, employing specialized syntax to search for specific content.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1593.003',
        method: "Search Public Code Repositories",
        description: "Adversaries may search public code repositories for information about victims, such as code hosted on GitHub, GitLab, or BitBucket.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1594',
        method: "Search Victim-Owned Websites",
        description: "Adversaries may search websites owned by the victim for information, including names of departments, physical locations, and key employees.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      }
    ]
  },
{
    id: 2,
    name: "Resource Development",
    description: "Developing or acquiring the necessary resources is crucial for a successful operation. What will you do to prepare?",
    phase: 'resourceDevelopment',
    choices: [
      {
        id: 'T1650',
        method: "Acquire Access",
        description: "Adversaries may purchase or otherwise acquire existing access to a target system or network, often through online services or initial access brokers.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583',
        method: "Acquire Infrastructure",
        description: "Adversaries may buy, lease, rent, or obtain infrastructure such as physical or cloud servers, domains, and third-party web services for their operations.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1583.001',
        method: "Acquire Domains",
        description: "Adversaries may acquire domains that can be used during targeting. Domains are human-readable names used to represent one or more IP addresses.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1583.002',
        method: "Set Up DNS Server",
        description: "Adversaries may set up their own DNS servers to be used during targeting, enabling the use of DNS traffic for various tasks including Command and Control.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583.003',
        method: "Rent Virtual Private Server",
        description: "Adversaries may rent Virtual Private Servers (VPSs) that can be used during targeting, making it difficult to physically tie back operations to them.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583.004',
        method: "Acquire Physical Server",
        description: "Adversaries may buy, lease, rent, or obtain physical servers to stage, launch, and execute operations, or use them for post-compromise activities.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1583.005',
        method: "Acquire Botnet",
        description: "Adversaries may buy, lease, or rent a network of compromised systems (botnet) that can be used during targeting, often for large-scale operations.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1583.006',
        method: "Register Web Services",
        description: "Adversaries may register for web services that can be used during targeting, making it difficult to physically tie back operations to them.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1583.007',
        method: "Acquire Serverless Infrastructure",
        description: "Adversaries may purchase and configure serverless cloud infrastructure to be used during targeting, making it more difficult to attribute operations back to them.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583.008',
        method: "Purchase Malvertising",
        description: "Adversaries may purchase online advertisements that can be abused to distribute malware to victims, often targeting specific audiences.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1586',
        method: "Compromise Accounts",
        description: "Adversaries may compromise accounts with services that can be used during targeting, such as social media, email, or cloud accounts.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1586.001',
        method: "Compromise Social Media Accounts",
        description: "Adversaries may compromise social media accounts to build a persona that can be used during targeting, leveraging existing trust in the compromised persona.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1586.002',
        method: "Compromise Email Accounts",
        description: "Adversaries may compromise email accounts to further their operations, such as for Phishing campaigns or infrastructure acquisition.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1586.003',
        method: "Compromise Cloud Accounts",
        description: "Adversaries may compromise cloud accounts to leverage cloud storage services or to develop capabilities without managing their own servers.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584',
        method: "Compromise Infrastructure",
        description: "Adversaries may compromise third-party infrastructure that can be used during targeting, such as physical servers, domains, or web services.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.001',
        method: "Hijack Domains",
        description: "Adversaries may hijack domains and/or subdomains to be used during targeting, often by exploiting gaps in domain registration processes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.002',
        method: "Compromise DNS Server",
        description: "Adversaries may compromise third-party DNS servers to be used during targeting, enabling the use of DNS traffic for various tasks including Command and Control.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.003',
        method: "Compromise Virtual Private Server",
        description: "Adversaries may compromise third-party Virtual Private Servers (VPSs) to be used during targeting, making it difficult to physically tie back operations to themselves.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.004',
        method: "Compromise Server",
        description: "Adversaries may compromise third-party servers to be used during targeting, often to stage, launch, and execute operations.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.005',
        method: "Compromise Botnet",
        description: "Adversaries may compromise numerous third-party systems to form a botnet that can be used during targeting, often for large-scale operations.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.006',
        method: "Compromise Web Services",
        description: "Adversaries may compromise access to third-party web services to be used during targeting, making it difficult to physically tie back operations to themselves.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.007',
        method: "Compromise Serverless Infrastructure",
        description: "Adversaries may compromise serverless cloud infrastructure to be used during targeting, making it more difficult to attribute operations back to them.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.008',
        method: "Compromise Network Devices",
        description: "Adversaries may compromise third-party network devices, such as SOHO routers, to be used during targeting, leveraging these devices to support additional targeting.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587',
        method: "Develop Capabilities",
        description: "Adversaries may build capabilities that can be used during targeting, such as developing malware, exploits, or self-signed certificates.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1587.001',
        method: "Develop Malware",
        description: "Adversaries may develop malware and malware components that can be used during targeting, creating a means for maintaining control of remote machines.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587.002',
        method: "Create Code Signing Certificates",
        description: "Adversaries may create self-signed code signing certificates that can be used during targeting, providing a level of authenticity for their software.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587.003',
        method: "Create Digital Certificates",
        description: "Adversaries may create self-signed SSL/TLS certificates that can be used during targeting, enabling secure communications with their infrastructure.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587.004',
        method: "Develop Exploits",
        description: "Adversaries may develop exploits that can be used during targeting, taking advantage of vulnerabilities to cause unintended behavior in systems.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1585',
        method: "Establish Accounts",
        description: "Adversaries may create and cultivate accounts with services that can be used during targeting, often building personas to further operations.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1585.001',
        method: "Create Social Media Accounts",
        description: "Adversaries may create and cultivate social media accounts that can be used during targeting, building personas that appear legitimate.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1585.002',
        method: "Create Email Accounts",
        description: "Adversaries may create email accounts that can be used during targeting, leveraging them for phishing or infrastructure acquisition.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1585.003',
        method: "Create Cloud Accounts",
        description: "Adversaries may create accounts with cloud providers that can be used during targeting, enabling them to leverage cloud services for operations.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1588',
        method: "Obtain Capabilities",
        description: "Adversaries may buy and/or steal capabilities that can be used during targeting, such as malware, exploits, and digital certificates.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1588.001',
        method: "Obtain Malware",
        description: "Adversaries may buy, steal, or download malware that can be used during targeting, obtaining tools for remote control and evading defenses.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1588.002',
        method: "Obtain Tools",
        description: "Adversaries may buy, steal, or download software tools that can be used during targeting, including commercial software and red teaming tools.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1588.003',
        method: "Obtain Code Signing Certificates",
        description: "Adversaries may buy and/or steal code signing certificates that can be used during targeting, providing a level of authenticity for their software.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1588.004',
        method: "Obtain Digital Certificates",
        description: "Adversaries may buy and/or steal SSL/TLS certificates that can be used during targeting, enabling secure communications with their infrastructure.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1588.005',
        method: "Obtain Exploits",
        description: "Adversaries may buy, steal, or download exploits that can be used during targeting, taking advantage of vulnerabilities in systems.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1588.006',
        method: "Obtain Vulnerability Information",
        description: "Adversaries may acquire information about vulnerabilities that can be used during targeting, often through open databases or closed vulnerability reports.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1588.007',
        method: "Obtain Artificial Intelligence Tools",
        description: "Adversaries may obtain access to generative AI tools, such as large language models (LLMs), to aid in various malicious tasks during targeting.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1608',
        method: "Stage Capabilities",
        description: "Adversaries may upload, install, or otherwise set up capabilities that can be used during targeting, often staging them on compromised or rented infrastructure.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.001',
        method: "Upload Malware",
        description: "Adversaries may upload malware to third-party or adversary-controlled infrastructure to make it accessible during targeting.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.002',
        method: "Upload Tools",
        description: "Adversaries may upload tools to third-party or adversary-controlled infrastructure to make them accessible during targeting.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.003',
        method: "Install Digital Certificates",
        description: "Adversaries may install SSL/TLS certificates on servers to enable secure communications during targeting.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1608.004',
        method: "Prepare Drive-by Target",
        description: "Adversaries may prepare an operational environment to infect systems that visit a website over the normal course of browsing.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1608.005',
        method: "Set Up Link Target",
        description: "Adversaries may put in place resources that are referenced by a link that can be used during targeting, often as part of a spearphishing campaign.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.006',
        method: "Conduct SEO Poisoning",
        description: "Adversaries may poison mechanisms that influence search engine optimization (SEO) to lure staged capabilities towards potential victims.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      }
    ]
  },
 {
    id: 3,
    name: "Initial Access",
    description: "Your operation begins with gaining initial access to the target system. Choose your method of entry.",
    phase: 'initialAccess',
    choices: [
      {
        id: 'T1659',
        method: "Content Injection",
        description: "Adversaries may inject malicious content into systems through online network traffic, enabling continuous communication and potential exploitation.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1189',
        method: "Drive-by Compromise",
        description: "Adversaries may gain access to a system through a user visiting a compromised website over the normal course of browsing.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1190',
        method: "Exploit Public-Facing Application",
        description: "Adversaries may exploit a vulnerability in an Internet-facing application to gain initial access to the target network.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1133',
        method: "External Remote Services",
        description: "Adversaries may leverage external-facing remote services, such as VPNs or RDP, to gain initial access to a network.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1200',
        method: "Hardware Additions",
        description: "Adversaries may introduce malicious hardware, such as network devices or computer accessories, into a system to gain access.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1566',
        method: "Phishing",
        description: "Adversaries may send phishing messages to gain access to victim systems through electronically delivered social engineering.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1566.001',
        method: "Spearphishing Attachment",
        description: "Adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1566.002',
        method: "Spearphishing Link",
        description: "Adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1566.003',
        method: "Spearphishing via Service",
        description: "Adversaries may send spearphishing messages via third-party services in an attempt to gain access to victim systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1566.004',
        method: "Spearphishing Voice",
        description: "Adversaries may use voice communications to manipulate a user into providing access to systems through social engineering.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1091',
        method: "Replication Through Removable Media",
        description: "Adversaries may gain access to systems by copying malware to removable media and exploiting Autorun features.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1195',
        method: "Supply Chain Compromise",
        description: "Adversaries may manipulate products or delivery mechanisms in the supply chain to compromise systems before they reach the final consumer.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1195.001',
        method: "Compromise Software Dependencies and Development Tools",
        description: "Adversaries may manipulate software dependencies and development tools to inject malicious code before they reach the final consumer.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1195.002',
        method: "Compromise Software Supply Chain",
        description: "Adversaries may manipulate application software in the supply chain, replacing legitimate versions with modified ones.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1195.003',
        method: "Compromise Hardware Supply Chain",
        description: "Adversaries may manipulate hardware components in the supply chain, inserting backdoors that allow for compromise upon deployment.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1199',
        method: "Trusted Relationship",
        description: "Adversaries may exploit trusted third-party relationships to gain initial access to a network, leveraging less scrutinized connections.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078',
        method: "Valid Accounts",
        description: "Adversaries may obtain and abuse valid credentials to gain initial access, persistence, or privilege escalation within a network.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1078.001',
        method: "Default Accounts",
        description: "Adversaries may obtain and abuse default account credentials, such as the Guest or Administrator accounts, to gain initial access.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1078.002',
        method: "Domain Accounts",
        description: "Adversaries may obtain and abuse domain account credentials to gain initial access, persistence, or privilege escalation.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1078.003',
        method: "Local Accounts",
        description: "Adversaries may obtain and abuse local account credentials to gain initial access, persistence, or privilege escalation on specific systems.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1078.004',
        method: "Cloud Accounts",
        description: "Adversaries may obtain and abuse cloud account credentials to gain initial access, persistence, or privilege escalation within cloud environments.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      }
    ]
},
{
    id: 4,
    name: "Persistence",
    description: "You've gained a foothold. Now, ensure your access remains secure. Choose your method to stay persistent within the target system.",
    phase: 'persistence',
    choices: [
      {
        id: 'T1098',
        method: "Account Manipulation",
        description: "Adversaries may manipulate accounts to maintain and/or elevate access to victim systems by modifying credentials or permission groups, subverting security policies, or performing iterative password updates.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1098.001',
        method: "Additional Cloud Credentials",
        description: "Adversaries may add adversary-controlled credentials to a cloud account to maintain persistent access to victim accounts and instances within the environment.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.002',
        method: "Additional Email Delegate Permissions",
        description: "Adversaries may grant additional permission levels to maintain persistent access to an adversary-controlled email account.",
        baseDifficulty: 12,  // Medium difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1098.003',
        method: "Additional Cloud Roles",
        description: "Adversaries may add additional roles or permissions to an adversary-controlled cloud account to maintain persistent access to a tenant.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.004',
        method: "SSH Authorized Keys",
        description: "Adversaries may modify the SSH authorized_keys file to maintain persistence on a victim host.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1098.005',
        method: "Device Registration",
        description: "Adversaries may register a device to an adversary-controlled account in a multifactor authentication (MFA) or device management system.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1098.006',
        method: "Additional Container Cluster Roles",
        description: "Adversaries may add additional roles or permissions to maintain persistent access to a container orchestration system.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1197',
        method: "BITS Jobs",
        description: "Adversaries may abuse BITS jobs to persistently execute code and perform various background tasks in a Windows environment.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547',
        method: "Boot or Logon Autostart Execution",
        description: "Adversaries may configure system settings to automatically execute a program during system boot or logon to maintain persistence or gain higher-level privileges.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.001',
        method: "Registry Run Keys / Startup Folder",
        description: "Adversaries may achieve persistence by adding a program to a startup folder or referencing it with a Registry run key, which causes the program to be executed when a user logs in.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.002',
        method: "Authentication Package",
        description: "Adversaries may abuse authentication packages to execute DLLs when the system boots.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.003',
        method: "Time Providers",
        description: "Adversaries may abuse time providers to execute DLLs when the system boots.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.004',
        method: "Winlogon Helper DLL",
        description: "Adversaries may abuse features of Winlogon to execute DLLs and/or executables when a user logs in.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.005',
        method: "Security Support Provider",
        description: "Adversaries may abuse security support providers (SSPs) to execute DLLs when the system boots.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.006',
        method: "Kernel Modules and Extensions",
        description: "Adversaries may modify the kernel to automatically execute programs on system boot.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.007',
        method: "Re-opened Applications",
        description: "Adversaries may modify plist files to automatically run an application when a user logs in on macOS.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.008',
        method: "LSASS Driver",
        description: "Adversaries may modify or add LSASS drivers to obtain persistence on compromised systems.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.009',
        method: "Shortcut Modification",
        description: "Adversaries may create or modify shortcuts that can execute a program during system boot or user login.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.010',
        method: "Port Monitors",
        description: "Adversaries may use port monitors to run an adversary supplied DLL during system boot for persistence or privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.012',
        method: "Print Processors",
        description: "Adversaries may abuse print processors to run malicious DLLs during system boot for persistence and/or privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.013',
        method: "XDG Autostart Entries",
        description: "Adversaries may add or modify XDG Autostart Entries to execute malicious programs or commands when a user’s desktop environment is loaded at login.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.014',
        method: "Active Setup",
        description: "Adversaries may achieve persistence by adding a Registry key to the Active Setup of the local machine, causing the program to be executed when a user logs in.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.015',
        method: "Login Items",
        description: "Adversaries may add login items to execute upon user login to gain persistence or escalate privileges on macOS.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1037',
        method: "Boot or Logon Initialization Scripts",
        description: "Adversaries may use scripts automatically executed at boot or logon initialization to establish persistence.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.001',
        method: "Logon Script (Windows)",
        description: "Adversaries may use Windows logon scripts automatically executed at logon initialization to establish persistence.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1037.002',
        method: "Login Hook",
        description: "Adversaries may use a Login Hook to establish persistence executed upon user logon on macOS.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.003',
        method: "Network Logon Script",
        description: "Adversaries may use network logon scripts automatically executed at logon initialization to establish persistence.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1037.004',
        method: "RC Scripts",
        description: "Adversaries may establish persistence by modifying RC scripts, which are executed during a Unix-like system’s startup.",
        baseDifficulty: 16,  // Medium-Hard difficulty
                successRateModifier: 0.75,
      },
      {
        id: 'T1037.005',
        method: "Startup Items",
        description: "Adversaries may use startup items automatically executed at boot initialization to establish persistence. Startup items execute during the final phase of the boot process and contain shell scripts or other executable files along with configuration information used by the system to determine the execution order for all startup items.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1176',
        method: "Browser Extensions",
        description: "Adversaries may abuse Internet browser extensions to establish persistent access to victim systems. Browser extensions or plugins are small programs that can add functionality and customize aspects of Internet browsers.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1554',
        method: "Compromise Host Software Binary",
        description: "Adversaries may modify host software binaries to establish persistent access to systems. Software binaries/executables provide a wide range of system commands or services, programs, and libraries.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1136',
        method: "Create Account",
        description: "Adversaries may create an account to maintain access to victim systems. With a sufficient level of access, creating such accounts may be used to establish secondary credentialed access that do not require persistent remote access tools to be deployed on the system.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1136.001',
        method: "Local Account",
        description: "Adversaries may create a local account to maintain access to victim systems. Local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1136.002',
        method: "Domain Account",
        description: "Adversaries may create a domain account to maintain access to victim systems. Domain accounts are those managed by Active Directory Domain Services where access and permissions are configured across systems and services that are part of that domain.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1136.003',
        method: "Cloud Account",
        description: "Adversaries may create a cloud account to maintain access to victim systems. With a sufficient level of access, such accounts may be used to establish secondary credentialed access that does not require persistent remote access tools to be deployed on the system.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543',
        method: "Create or Modify System Process",
        description: "Adversaries may create or modify system-level processes to repeatedly execute malicious payloads as part of persistence. These system processes are known as services on Windows and Linux, and as Launch Daemons or Launch Agents on macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.001',
        method: "Launch Agent",
        description: "Adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. Launch agents load at user login and perform tasks without user interaction.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.002',
        method: "Systemd Service",
        description: "Adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. Systemd is commonly used for managing background daemon processes on Linux.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.003',
        method: "Windows Service",
        description: "Adversaries may create or modify Windows services to repeatedly execute malicious payloads as part of persistence. Services are programs that perform background system functions.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.004',
        method: "Launch Daemon",
        description: "Adversaries may create or modify Launch Daemons to execute malicious payloads as part of persistence. Launch Daemons are plist files used to interact with Launchd, the service management framework used by macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.005',
        method: "Container Service",
        description: "Adversaries may create or modify container or container cluster management tools that run as daemons, agents, or services on individual hosts.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546',
        method: "Event Triggered Execution",
        description: "Adversaries may establish persistence and/or elevate privileges using system mechanisms that trigger execution based on specific events.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.001',
        method: "Change Default File Association",
        description: "Adversaries may establish persistence by executing malicious content triggered by a file type association.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1546.002',
        method: "Screensaver",
        description: "Adversaries may establish persistence by executing malicious content triggered by user inactivity through modifying screensaver settings.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1546.003',
        method: "Windows Management Instrumentation Event Subscription",
        description: "Adversaries may establish persistence and elevate privileges by executing malicious content triggered by a Windows Management Instrumentation (WMI) event subscription.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.004',
        method: "Unix Shell Configuration Modification",
        description: "Adversaries may establish persistence through executing malicious commands triggered by a user’s shell.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.005',
        method: "Trap",
        description: "Adversaries may establish persistence by executing malicious content triggered by an interrupt signal using the trap command.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.006',
        method: "LC_LOAD_DYLIB Addition",
        description: "Adversaries may establish persistence by executing malicious content triggered by the execution of tainted binaries with LC_LOAD_DYLIB header modifications.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.007',
        method: "Netsh Helper DLL",
        description: "Adversaries may establish persistence by executing malicious content triggered by Netsh Helper DLLs.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.008',
        method: "Accessibility Features",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features such as those that launch a command prompt before user logon.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.009',
        method: "AppCert DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppCert DLLs loaded into processes.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.010',
        method: "AppInit DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppInit DLLs loaded into processes.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.011',
        method: "Application Shimming",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.012',
        method: "Image File Execution Options Injection",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by Image File Execution Options (IFEO) debuggers. This involves modifying the Windows Registry to specify a debugger that will be launched when a specific process is started.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.013',
        method: "PowerShell Profile",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by PowerShell profiles. PowerShell profiles are scripts that run when PowerShell starts and can be used to customize user environments.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.014',
        method: "Emond",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by the Event Monitor Daemon (emond) on macOS. Emond processes rules defined in plist files to monitor and act upon specified events.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.015',
        method: "Component Object Model Hijacking",
        description: "Adversaries may establish persistence by executing malicious content triggered by hijacked references to Component Object Model (COM) objects. COM is a system within Windows that enables interaction between software components through the OS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.016',
        method: "Installer Packages",
        description: "Adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content. Installer packages can include scripts that run prior to or after installation with elevated permissions.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1133',
        method: "External Remote Services",
        description: "Adversaries may leverage external-facing remote services to initially access and/or persist within a network. These services allow users to connect to internal enterprise network resources from external locations, which adversaries can exploit.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574',
        method: "Hijack Execution Flow",
        description: "Adversaries may execute their own malicious payloads by hijacking the way operating systems run programs, enabling persistence, privilege escalation, or evasion of defenses.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.001',
        method: "DLL Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load DLLs. This method exploits the way Windows systems search for required DLLs to load into a program.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.002',
        method: "DLL Side-Loading",
        description: "Adversaries may execute their own malicious payloads by side-loading DLLs. This involves planting a DLL within the search order of a program and waiting for the victim application to be invoked.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.004',
        method: "Dylib Hijacking",
        description: "Adversaries may execute their own payloads by placing a malicious dynamic library (dylib) with an expected name in a path a victim application searches at runtime on macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.005',
        method: "Executable Installer File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by an installer. This may occur if permissions on the file system directory containing a target binary or the binary itself are improperly set.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.006',
        method: "Dynamic Linker Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries, such as LD_PRELOAD on Linux or DYLD_INSERT_LIBRARIES on macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.007',
        method: "Path Interception by PATH Environment Variable",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables used to load libraries. The PATH environment variable contains directories that the OS searches sequentially to find the binary to execute.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.008',
        method: "Path Interception by Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load other programs, placing their own file in the directory where the calling program is located.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.009',
        method: "Path Interception by Unquoted Path",
        description: "Adversaries may execute their own malicious payloads by hijacking vulnerable file path references. Adversaries can take advantage of paths that lack surrounding quotations by placing an executable in a higher level directory within the path.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.010',
        method: "Services File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by services. Improper permissions on the service binary or directory can allow adversaries to replace the binary and execute their own code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.011',
        method: "Services Registry Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services, redirecting from the originally specified executable to one that they control.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.012',
        method: "COR_PROFILER",
        description: "Adversaries may leverage the COR_PROFILER environment variable to hijack the execution flow of programs that load the .NET CLR, loading their own profiling DLL into each .NET process.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.013',
        method: "KernelCallbackTable",
        description: "Adversaries may abuse the KernelCallbackTable of a process to hijack its execution flow and run their own payloads.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.014',
        method: "AppDomainManager",
        description: "Adversaries may execute their own malicious payloads by hijacking how the .NET AppDomainManager loads assemblies.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1525',
        method: "Implant Internal Image",
        description: "Adversaries may implant cloud or container images with malicious code to establish persistence after gaining access to an environment. Unlike Upload Malware, this technique focuses on adversaries implanting an image in a registry within a victim’s environment.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556',
        method: "Modify Authentication Process",
        description: "Adversaries may modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts.",
                baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.001',
        method: "Domain Controller Authentication",
        description: "Adversaries may patch the authentication process on a domain controller to bypass the typical authentication mechanisms and enable access to accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.002',
        method: "Password Filter DLL",
        description: "Adversaries may register malicious password filter dynamic link libraries (DLLs) into the authentication process to acquire user credentials as they are validated.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.003',
        method: "Pluggable Authentication Modules",
        description: "Adversaries may modify pluggable authentication modules (PAM) to access user credentials or enable otherwise unwarranted access to accounts. PAM is a modular system that guides authentication for many services in Unix-based systems.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.004',
        method: "Network Device Authentication",
        description: "Adversaries may use Patch System Image to hard code a password in the operating system, thus bypassing native authentication mechanisms for local accounts on network devices.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.005',
        method: "Reversible Encryption",
        description: "An adversary may abuse Active Directory authentication encryption properties to gain access to credentials on Windows systems. The AllowReversiblePasswordEncryption property enables the storage of user credentials in a reversible encrypted form.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.006',
        method: "Multi-Factor Authentication",
        description: "Adversaries may disable or modify multi-factor authentication (MFA) mechanisms to enable persistent access to compromised accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.007',
        method: "Hybrid Identity",
        description: "Adversaries may patch, modify, or otherwise backdoor cloud authentication processes that are tied to on-premises user identities in order to bypass typical authentication mechanisms and enable persistent access to accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.008',
        method: "Network Provider DLL",
        description: "Adversaries may register malicious network provider dynamic link libraries (DLLs) to capture cleartext user credentials during the authentication process. These DLLs are used to interface with network protocols and can be manipulated to gather credentials during logon.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.009',
        method: "Conditional Access Policies",
        description: "Adversaries may disable or modify conditional access policies to enable persistent access to compromised accounts. These policies are used by identity providers to determine whether a user should be granted access to a resource.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137',
        method: "Office Application Startup",
        description: "Adversaries may leverage Microsoft Office-based applications for persistence between startups. Various mechanisms, such as Office Template Macros and add-ins, can be used to execute malicious code when Office applications are started.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.001',
        method: "Office Template Macros",
        description: "Adversaries may abuse Microsoft Office templates to obtain persistence on a compromised system. Templates are used by Office applications to customize styles and functionality, and can be manipulated to execute malicious code.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.002',
        method: "Office Test",
        description: "Adversaries may abuse the Microsoft Office 'Office Test' Registry key to obtain persistence on a compromised system. This key allows a user to specify an arbitrary DLL that will be executed every time an Office application is started.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.003',
        method: "Outlook Forms",
        description: "Adversaries may abuse Microsoft Outlook forms to obtain persistence on a compromised system. Custom Outlook forms can be created that will execute code when a specifically crafted email is sent by an adversary utilizing the same custom form.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.004',
        method: "Outlook Home Page",
        description: "Adversaries may abuse Microsoft Outlook's Home Page feature to obtain persistence on a compromised system. This feature allows for an internal or external URL to be loaded and presented whenever a folder is opened.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.005',
        method: "Outlook Rules",
        description: "Adversaries may abuse Microsoft Outlook rules to obtain persistence on a compromised system. Malicious Outlook rules can be created to trigger code execution when an adversary sends a specifically crafted email.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.006',
        method: "Add-ins",
        description: "Adversaries may abuse Microsoft Office add-ins to obtain persistence on a compromised system. These add-ins can be used to extend Office functionality and may be manipulated to execute malicious code.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1653',
        method: "Power Settings",
        description: "Adversaries may impair a system's ability to hibernate, reboot, or shut down in order to extend access to infected machines. This technique involves modifying system power settings to prevent these actions from disrupting malicious activity.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1542',
        method: "Pre-OS Boot",
        description: "Adversaries may abuse Pre-OS Boot mechanisms as a way to establish persistence on a system. During the booting process, firmware and startup services are loaded before the operating system, and these can be modified to execute malicious code.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.001',
        method: "System Firmware",
        description: "Adversaries may modify system firmware, such as the BIOS or UEFI, to persist on systems. This technique operates below the operating system, making it difficult to detect and remove.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.002',
        method: "Component Firmware",
        description: "Adversaries may modify component firmware to persist on systems. This can involve compromising firmware on devices such as hard drives, network cards, or other peripherals, enabling deep system access.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.003',
        method: "Bootkit",
        description: "Adversaries may use bootkits to persist on systems. Bootkits reside at a layer below the operating system, making it difficult to perform full remediation unless they are suspected and targeted.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.004',
        method: "ROMMONkit",
        description: "Adversaries may abuse the ROM Monitor (ROMMON) by loading unauthorized firmware with adversary code to provide persistent access and manipulate device behavior, which is difficult to detect.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.005',
        method: "TFTP Boot",
        description: "Adversaries may abuse netbooting to load an unauthorized network device operating system from a Trivial File Transfer Protocol (TFTP) server, enabling persistent access to network devices.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053',
        method: "Scheduled Task/Job",
        description: "Adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. Utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.002',
        method: "At",
        description: "Adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. The at utility exists within Windows, Linux, and macOS for scheduling tasks at a specified time and date.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.003',
        method: "Cron",
        description: "Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. The cron utility is a time-based job scheduler for Unix-like operating systems.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.005',
        method: "Scheduled Task",
        description: "Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code. This can be done through the schtasks utility on the command line or through the Task Scheduler GUI.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.006',
        method: "Systemd Timers",
        description: "Adversaries may abuse systemd timers to perform task scheduling for initial or recurring execution of malicious code. Systemd timers are unit files with file extension .timer that control services and can be set to run on a calendar event or after a time span relative to a starting point.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.007',
        method: "Container Orchestration Job",
        description: "Adversaries may abuse task scheduling functionality provided by container orchestration tools such as Kubernetes to schedule deployment of containers configured to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505',
        method: "Server Software Component",
        description: "Adversaries may abuse legitimate extensible development features of servers to establish persistent access to systems. Server applications may allow developers to write and install software or scripts to extend the functionality of the main application.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.001',
        method: "SQL Stored Procedures",
        description: "Adversaries may abuse SQL stored procedures to establish persistent access to systems. SQL stored procedures are code that can be saved and reused, and they can be manipulated to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.002',
        method: "Transport Agent",
        description: "Adversaries may abuse Microsoft transport agents to establish persistent access to systems. These agents operate on email messages passing through the transport pipeline and can be used to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.003',
        method: "Web Shell",
        description: "Adversaries may backdoor web servers with web shells to establish persistent access to systems. A web shell is a web script placed on a server to allow an adversary to access the server as a gateway into a network.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.004',
        method: "IIS Components",
        description: "Adversaries may install malicious components on Internet Information Services (IIS) web servers to establish persistence. IIS components can extend the functionality of the server, and adversaries can manipulate them to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.005',
        method: "Terminal Services DLL",
        description: "Adversaries may abuse components of Terminal Services to enable persistent access to systems. Terminal Services, also known as Remote Desktop Services, allow remote terminal connections to hosts, which adversaries can exploit.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1205',
        method: "Traffic Signaling",
        description: "Adversaries may use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control. This technique involves sending a magic value or sequence to a system to trigger a special response, such as opening a closed port.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1205.001',
        method: "Port Knocking",
        description: "Adversaries may use port knocking to hide open ports used for persistence or command and control. This involves sending a series of attempted connections to a predefined sequence of closed ports to enable a port.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1205.002',
        method: "Socket Filters",
        description: "Adversaries may attach filters to a network socket to monitor and then activate backdoors used for persistence or command and control. This can involve using libraries like libpcap to open sockets and install filters to trigger actions when specific data is received.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078',
        method: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Compromised credentials can be used to bypass access controls and maintain persistence on systems.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.001',
        method: "Default Accounts",
        description: "Adversaries may obtain and abuse credentials of a default account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Default accounts include those built into operating systems or devices, such as the Administrator account on Windows systems.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.002',
        method: "Domain Accounts",
        description: "Adversaries may obtain and abuse credentials of a domain account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Domain accounts are managed by Active Directory Domain Services and cover users, administrators, and services across a domain.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.003',
        method: "Local Accounts",
        description: "Adversaries may obtain and abuse credentials of a local account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Local accounts are configured by an organization for use on individual systems or services.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.004',
        method: "Cloud Accounts",
        description: "Adversaries may obtain and abuse credentials of a cloud account to gain access to cloud resources and maintain persistence within a cloud environment. Cloud accounts can be used to access resources and services within a cloud service provider or SaaS application.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
    ],
  },
    {
    id: 5,
    name: "Privilege Escalation",
    description: "You're in, but you need more power. Choose your method to elevate your privileges and gain control over critical system functions.",
    phase: 'privilegeEscalation',
    choices: [
      {
        id: 'T1548',
        method: "Abuse Elevation Control Mechanism",
        description: "Adversaries may circumvent mechanisms designed to control and elevate privileges to gain higher-level permissions. This may involve exploiting native elevation control mechanisms to escalate privileges on a system.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.001',
        method: "Setuid and Setgid",
        description: "An adversary may abuse configurations where an application has the setuid or setgid bits set in order to get code running in a different user’s context, potentially gaining elevated privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.002',
        method: "Bypass User Account Control",
        description: "Adversaries may bypass UAC mechanisms to elevate process privileges on a system, which may involve prompting the user for confirmation or exploiting UAC bypass techniques.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.003',
        method: "Sudo and Sudo Caching",
        description: "Adversaries may perform sudo caching and/or use the sudoers file to elevate privileges, allowing them to execute commands as other users or spawn processes with higher privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.004',
        method: "Elevated Execution with Prompt",
        description: "Adversaries may leverage the AuthorizationExecuteWithPrivileges API on macOS to escalate privileges by prompting the user for credentials.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.005',
        method: "Temporary Elevated Cloud Access",
        description: "Adversaries may abuse permission configurations to gain temporarily elevated access to cloud resources, such as impersonating other accounts or gaining short-term access to elevated privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.006',
        method: "TCC Manipulation",
        description: "Adversaries can manipulate or abuse the Transparency, Consent, & Control (TCC) service or database on macOS to execute malicious applications with elevated permissions.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1134',
        method: "Access Token Manipulation",
        description: "Adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.001',
        method: "Token Impersonation/Theft",
        description: "Adversaries may duplicate and impersonate another user's existing token to escalate privileges and bypass access controls.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.002',
        method: "Create Process with Token",
        description: "Adversaries may create a new process with an existing token to escalate privileges and bypass access controls using features like CreateProcessWithTokenW.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.003',
        method: "Make and Impersonate Token",
        description: "Adversaries may make new tokens and impersonate users to escalate privileges and bypass access controls, such as by using the LogonUser function.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.004',
        method: "Parent PID Spoofing",
        description: "Adversaries may spoof the parent process identifier (PPID) of a new process to evade process-monitoring defenses or to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1134.005',
        method: "SID-History Injection",
        description: "Adversaries may use SID-History Injection to escalate privileges and bypass access controls by adding security identifiers (SIDs) to access tokens.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1098',
        method: "Account Manipulation",
        description: "Adversaries may manipulate accounts to maintain and/or elevate access to victim systems, including modifying credentials or permission groups.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.001',
        method: "Additional Cloud Credentials",
        description: "Adversaries may add adversary-controlled credentials to a cloud account to maintain persistent access or escalate privileges within a cloud environment.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1098.002',
        method: "Additional Email Delegate Permissions",
        description: "Adversaries may grant additional permission levels to maintain persistent access or escalate privileges in an adversary-controlled email account.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.003',
        method: "Additional Cloud Roles",
        description: "Adversaries may add additional roles or permissions to an adversary-controlled cloud account to maintain persistent access or escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1098.004',
        method: "SSH Authorized Keys",
        description: "Adversaries may modify the SSH authorized_keys file to maintain persistence or escalate privileges on a victim host.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.005',
        method: "Device Registration",
        description: "Adversaries may register a device to an adversary-controlled account in a multifactor authentication (MFA) or device management system to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.006',
        method: "Additional Container Cluster Roles",
        description: "Adversaries may add additional roles or permissions to an adversary-controlled account to escalate privileges in a container orchestration system.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547',
        method: "Boot or Logon Autostart Execution",
        description: "Adversaries may configure system settings to automatically execute a program during system boot or logon to maintain persistence or escalate privileges on compromised systems.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.001',
        method: "Registry Run Keys / Startup Folder",
        description: "Adversaries may achieve persistence by adding a program to a startup folder or referencing it with a Registry run key, causing it to be executed when a user logs in.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.002',
        method: "Authentication Package",
        description: "Adversaries may abuse authentication packages to execute DLLs when the system boots, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.003',
        method: "Time Providers",
        description: "Adversaries may abuse time providers to execute DLLs when the system boots, which can be used to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.004',
        method: "Winlogon Helper DLL",
        description: "Adversaries may abuse features of Winlogon to execute DLLs and/or executables when a user logs in, which can be used to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.005',
        method: "Security Support Provider",
        description: "Adversaries may abuse security support providers (SSPs) to execute DLLs when the system boots, allowing them to escalate privileges.",
                baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.006',
        method: "Kernel Modules and Extensions",
        description: "Adversaries may modify the kernel to automatically execute programs on system boot, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.007',
        method: "Re-opened Applications",
        description: "Adversaries may modify plist files to automatically run an application when a user logs in, which can be used to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.008',
        method: "LSASS Driver",
        description: "Adversaries may modify or add LSASS drivers to obtain persistence on compromised systems, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.009',
        method: "Shortcut Modification",
        description: "Adversaries may create or modify shortcuts that can execute a program during system boot or user login, which can be used to escalate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.010',
        method: "Port Monitors",
        description: "Adversaries may use port monitors to run an adversary-supplied DLL during system boot for persistence or privilege escalation.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.012',
        method: "Print Processors",
        description: "Adversaries may abuse print processors to run malicious DLLs during system boot for persistence and/or privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.013',
        method: "XDG Autostart Entries",
        description: "Adversaries may add or modify XDG Autostart Entries to execute malicious programs or commands when a user’s desktop environment is loaded at login.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.014',
        method: "Active Setup",
        description: "Adversaries may achieve persistence by adding a Registry key to the Active Setup of the local machine, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.015',
        method: "Login Items",
        description: "Adversaries may add login items to execute upon user login to gain persistence or escalate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037',
        method: "Boot or Logon Initialization Scripts",
        description: "Adversaries may use scripts automatically executed at boot or logon initialization to establish persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.001',
        method: "Logon Script (Windows)",
        description: "Adversaries may use Windows logon scripts automatically executed at logon initialization to establish persistence or escalate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.002',
        method: "Login Hook",
        description: "Adversaries may use a Login Hook to establish persistence executed upon user logon, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.003',
        method: "Network Logon Script",
        description: "Adversaries may use network logon scripts automatically executed at logon initialization to establish persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.004',
        method: "RC Scripts",
        description: "Adversaries may establish persistence by modifying RC scripts which are executed during a Unix-like system’s startup, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1037.005',
        method: "Startup Items",
        description: "Adversaries may use startup items automatically executed at boot initialization to establish persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543',
        method: "Create or Modify System Process",
        description: "Adversaries may create or modify system-level processes to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.001',
        method: "Launch Agent",
        description: "Adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.002',
        method: "Systemd Service",
        description: "Adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.003',
        method: "Windows Service",
        description: "Adversaries may create or modify Windows services to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.004',
        method: "Launch Daemon",
        description: "Adversaries may create or modify Launch Daemons to execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.005',
        method: "Container Service",
        description: "Adversaries may create or modify container or container cluster management tools that run as daemons, agents, or services on individual hosts, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1484',
        method: "Domain or Tenant Policy Modification",
        description: "Adversaries may modify the configuration settings of a domain or identity tenant to evade defenses and/or escalate privileges in centrally managed environments.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1484.001',
        method: "Group Policy Modification",
        description: "Adversaries may modify Group Policy Objects (GPOs) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1484.002',
        method: "Trust Modification",
        description: "Adversaries may add new domain trusts, modify the properties of existing domain trusts, or otherwise change the configuration of trust relationships between domains and tenants to evade defenses and/or elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1611',
        method: "Escape to Host",
        description: "Adversaries may break out of a container to gain access to the underlying host, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546',
        method: "Event Triggered Execution",
        description: "Adversaries may establish persistence and/or elevate privileges using system mechanisms that trigger execution based on specific events.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.001',
        method: "Change Default File Association",
        description: "Adversaries may establish persistence by executing malicious content triggered by a file type association, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.002',
        method: "Screensaver",
                description: "Adversaries may establish persistence by executing malicious content triggered by user inactivity, such as screensavers, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.003',
        method: "Windows Management Instrumentation Event Subscription",
        description: "Adversaries may establish persistence and elevate privileges by executing malicious content triggered by a Windows Management Instrumentation (WMI) event subscription.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.004',
        method: "Unix Shell Configuration Modification",
        description: "Adversaries may establish persistence through executing malicious commands triggered by a user’s shell configuration, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.005',
        method: "Trap",
        description: "Adversaries may establish persistence by executing malicious content triggered by an interrupt signal using the trap command, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.006',
        method: "LC_LOAD_DYLIB Addition",
        description: "Adversaries may establish persistence by executing malicious content triggered by the execution of tainted binaries through Mach-O headers, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.007',
        method: "Netsh Helper DLL",
        description: "Adversaries may establish persistence by executing malicious content triggered by Netsh Helper DLLs, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.008',
        method: "Accessibility Features",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features, such as Sticky Keys or Utilman.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.009',
        method: "AppCert DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppCert DLLs loaded into processes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.010',
        method: "AppInit DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppInit DLLs loaded into processes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.011',
        method: "Application Shimming",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.012',
        method: "Image File Execution Options Injection",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by Image File Execution Options (IFEO) debuggers.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.013',
        method: "PowerShell Profile",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by PowerShell profiles.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.014',
        method: "Emond",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by the Event Monitor Daemon (emond) on macOS.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.015',
        method: "Component Object Model Hijacking",
        description: "Adversaries may establish persistence by executing malicious content triggered by hijacked references to Component Object Model (COM) objects.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.016',
        method: "Installer Packages",
        description: "Adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1068',
        method: "Exploitation for Privilege Escalation",
        description: "Adversaries may exploit software vulnerabilities in an attempt to elevate privileges, such as exploiting vulnerabilities in operating systems or applications.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574',
        method: "Hijack Execution Flow",
        description: "Adversaries may execute their own malicious payloads by hijacking the way operating systems run programs, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.001',
        method: "DLL Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load DLLs, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.002',
        method: "DLL Side-Loading",
        description: "Adversaries may execute their own malicious payloads by side-loading DLLs, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.004',
        method: "Dylib Hijacking",
        description: "Adversaries may execute their own payloads by placing a malicious dynamic library (dylib) with an expected name in a path a victim application searches at runtime, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.005',
        method: "Executable Installer File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by an installer with improperly set permissions, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.006',
        method: "Dynamic Linker Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.007',
        method: "Path Interception by PATH Environment Variable",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables used to load libraries, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.008',
        method: "Path Interception by Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load other programs, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.009',
        method: "Path Interception by Unquoted Path",
        description: "Adversaries may execute their own malicious payloads by hijacking vulnerable file path references, which can be used to elevate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.010',
        method: "Services File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by services with improperly set permissions, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.011',
        method: "Services Registry Permissions Weakness",
                description: "Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.012',
        method: "COR_PROFILER",
        description: "Adversaries may leverage the COR_PROFILER environment variable to hijack the execution flow of programs that load the .NET CLR, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.013',
        method: "KernelCallbackTable",
        description: "Adversaries may abuse the KernelCallbackTable of a process to hijack its execution flow in order to run their own payloads, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.014',
        method: "AppDomainManager",
        description: "Adversaries may execute their own malicious payloads by hijacking how the .NET AppDomainManager loads assemblies, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055',
        method: "Process Injection",
        description: "Adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.001',
        method: "Dynamic-link Library Injection",
        description: "Adversaries may inject dynamic-link libraries (DLLs) into processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.002',
        method: "Portable Executable Injection",
        description: "Adversaries may inject portable executables (PE) into processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.003',
        method: "Thread Execution Hijacking",
        description: "Adversaries may inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.004',
        method: "Asynchronous Procedure Call",
        description: "Adversaries may inject malicious code into processes via the asynchronous procedure call (APC) queue in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.005',
        method: "Thread Local Storage",
        description: "Adversaries may inject malicious code into processes via thread local storage (TLS) callbacks in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.008',
        method: "Ptrace System Calls",
        description: "Adversaries may inject malicious code into processes via ptrace (process trace) system calls in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.009',
        method: "Proc Memory",
        description: "Adversaries may inject malicious code into processes via the /proc filesystem in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.011',
        method: "Extra Window Memory Injection",
        description: "Adversaries may inject malicious code into processes via Extra Window Memory (EWM) in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.012',
        method: "Process Hollowing",
        description: "Adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.013',
        method: "Process Doppelgänging",
        description: "Adversaries may inject malicious code into processes via process doppelgänging in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.014',
        method: "VDSO Hijacking",
        description: "Adversaries may inject malicious code into processes via VDSO hijacking in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.015',
        method: "ListPlanting",
        description: "Adversaries may abuse list-view controls to inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053',
        method: "Scheduled Task/Job",
        description: "Adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.002',
        method: "At",
        description: "Adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.003',
        method: "Cron",
        description: "Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.005',
        method: "Scheduled Task",
        description: "Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.006',
        method: "Systemd Timers",
        description: "Adversaries may abuse systemd timers to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.007',
        method: "Container Orchestration Job",
        description: "Adversaries may abuse task scheduling functionality provided by container orchestration tools such as Kubernetes to schedule deployment of containers configured to execute malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1078',
        method: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1078.001',
        method: "Default Accounts",
        description: "Adversaries may obtain and abuse credentials of a default account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.002',
        method: "Domain Accounts",
        description: "Adversaries may obtain and abuse credentials of a domain account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1078.003',
        method: "Local Accounts",
        description: "Adversaries may obtain and abuse credentials of a local account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.004',
        method: "Cloud Accounts",
        description: "Adversaries may obtain and abuse credentials of cloud accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
    ],
  },
       
];

export default scenarios;
