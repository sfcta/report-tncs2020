---
title: "Public Safety"
subtitle: "Chapter 4"
date: 2022-07-21
weight: 4
draft: false
---

The Passenger Charter-party Carriers’ Act, enacted in 1961, authorizes
the CPUC to regulate “[t]he use of public highways for the transportation
of passengers for compensation ... and to promote carrier and public
safety through its safety enforcement regulations.”[^1] The CPUC requires
TNCs submit a number of annual reports relevant to passenger and
public safety:

[^1]: California Public Utilities Code § 5352(a). https://leginfo.legislature.ca.gov/faces/codes_displayText.
xhtml?lawCode=PUC&division=2.&title=&part=&chapter=8.&article=1.

- _Accidents & Incidents_ documents vehicle collisions
- _Assaults & Harassments_ documents reports of assault and harassment
- _Law Enforcement Citations_ documents citations issued by law enforcement officers
- _Zero Tolerance_ documents reports of driving under the influence

This section presents an analysis of public safety incidents from
September 2019 to August 2020 from the 2020 public TNC Annual
Reports. It includes incident totals, rates per square mile, and rates per
100,000 trips. Areal (per square mile) rates are useful for understanding
incidents that may impact the general public. Trip-based rates are
useful for understanding risks to TNC users. VMT-based rates (which
are preferable over trip-based rates) are useful in assessing risks to
passengers and to the general public relative to the total amount of
driving, but cannot be included because Lyft’s reports are redacted to
remove VMT information.

## How many TNC public safety incidents were reported?
Figure 13 shows the number of incidents reported by each company within the
categories of collisions, assaults and harassments, DUI complaints, and citations.
Uber reported 30,000 public safety incidents, while Lyft reported almost 45,000
public safety incidents. There were nearly 27,000 collisions, approximately 14,800
reported by Uber and 11,200 reported by Lyft. In addition, over 20,000 assaults and
harassments (almost all of them reported by Lyft), 15,000 DUI complaints, and 14,000
citations were also reported.

{{% plotly_bar id="Fig13" csvfile="content/ch4_public_safety/public_safety_incidents_total.csv" height="full" width="full" style="tnc" bmode="cluster" orientation="h" %}}
<figcaption><b>Figure 13. Public Safety Issues by Category</b></figcaption><br/>

Figure 14 shows the rates of incidents per 100,000 trips. Lyft reported total public
safety incidents rates that were more than 3 times higher than Uber. Lyft’s collisions
rates were twice Uber’s. Lyft’s assaults and harassment rates were more than 30 times
Uber’s, Lyft’s DUI complaints were over 2.5 times Uber’s, and Lyft’s citations were twice
Uber’s. These figures suggest that the companies may be reporting public safety
incidents differently, pointing to the need for increased review by regulators.

{{% plotly_bar id="Fig14" title="Incidents per 100,000 trips from September 2019 to August 2020" csvfile="content/ch4_public_safety/public_safety_incidents_rate-uber.csv" height="full" width="full" style="uber4" bmode="stack" orientation="h" %}}
{{% plotly_bar id="Fig14" csvfile="content/ch4_public_safety/public_safety_incidents_rate-lyft.csv" height="full" width="full" style="lyft4" bmode="stack" orientation="h" %}}
<figcaption>Figure 14. Incidents per 100,000 trips from September 2019 to August 2020</figcaption><br/>

## Where did public safety incidents occur?
Assaults and harassments, collisions, and DUI complaints happened everywhere that
TNC trips happened. Figure 15 shows incident totals and rates per 100,000 trips by
category for the top 10 counties by number of trips. Incident rates vary by county
and by company. San Francisco, which has the highest density of trips, has among
the lowest public safety incident rates. By contrast, Sacramento, which has a low trip
density, has the highest rate of public safety incidents. This may be partly explained
by trip lengths, as denser counties with shorter average trip lengths may be less
likely to be involved in a public safety incident on any particular trip. However, Lyft’s
incomplete reports prevent an analysis of the relationship between public safety
events and trip lengths.

Lyft’s public safety incident rates were much higher than Uber’s in each of the top 10
counties with the most TNC trips. The percent difference in incident rates between the
companies was closest in Los Angeles County, where Lyft’s rate is 122% higher than
Uber's, and furthest in Santa Clara County, where Lyft’s rate is 268% higher than Uber’s.

{{% plotly_bar id="Fig15" csvfile="content/ch4_public_safety/public_safety_incidents_rates_by_county.csv" height="100%" width="full" style="tnc" bmode="" orientation="h" %}}
<figcaption>Figure 15. Rates of Public Safety Incidents per 100,000 trips by Company and
County from September 2019 to August 2020</figcaption><br/>

Assaults and harassments, collisions, and DUI complaints, like trip requests were
reported by zip code. Citations, per the Law Enforcement Citations template were
reported with a citation location. However, the CPUC did not provide explicit
requirements for how the location should be reported and as a consequence each
company reported it differently.

Table 21 shows the total number of citations by location. It is not clear why nearly all
the reported citations were at airports. Uber reported 7,711 citations, all at airports. Lyft
reported 6,259 citations, 6,038 (96%) of which were at airports, while 214 were in cities,
and the remaining 7 were in other locations like an unincorporated neighborhood.

<figcaption>Table 21. Number of Citations by Company and Location from September 2019 to August 2020</figcaption>

Location | Uber | Lyft | Total
 --- | ---: | ---: | ---:
Citations at Airports | 7,711 | 6,038 | 13,749
Citations in Cities | 0 | 214 | 214
Citations at Other Locations | 0 | 7 | 7
Total Citations | 7,711 | 6,259 | 13,970

CPUC has not provided guidance to report citations solely at airports. The almost
complete absence of TNC citations in locations other than airports suggests
inconsistent or incomplete reporting and prevents the CPUC from assessing a key
indicator of public safety and compliance with laws and regulations.

## What types of public safety incidents occurred?

It is difficult to provide a clear depiction of the types of public safety incidents because
the CPUC has not standardized reporting requirements for collisions, assaults and
harassments, DUI complaints, or law enforcement citations. The lone exception,
Decision 22-06-029, issued on June 24, 2022, adopted taxonomies for sexual assault
and sexual harassment. These taxonomies only apply to a subset of the events reported
in the Assaults and Harassments reports and had not been adopted when the 2020
Annual Reports were filed. In any event, the type of assault and/or harassment has been
removed from the 2020 Public Annual Reports entirely.

In the absence of clear and consistent requirements, **each company decides themselves** how they report public safety data. As a result, this report is limited to only
summarizing the overall number of incidents and cannot provide a more detailed
analysis of types of public safety incidents. Similarly, it is difficult to develop public
policy or exercise any meaningful or consistent regulatory oversight with respect to
these public safety concerns.

Table 22 shows how each company reports the types of public safety incident for
collisions, DUI complaints, and citations. Note that the public version of _Assaults
& Harassments_ does not contain any incident descriptions or categorizations. The
table that each company uses reflects a different taxonomy to categorize the type of
collision. Uber uses 7 response codes briefly describing the collision type. Lyft uses 5
response codes that describe, not the type of collision, but a qualitative description
of the extent of damage. For DUI complaints, Uber uses 8 response codes, all
describing allegations against the driver. Lyft used 4 response codes, 2 for describing
allegations against the driver and 2 describing allegations against the passenger.
One of the response codes is qualified as a first occurrence, “alleged_marijuana_
smell__first_instance”, but no other response codes for further occurrences. The other
codes Lyft uses are not qualified in this way. For citations, Uber used 657 unique
response codes and Lyft used 347 unique response codes.

<figcaption>Table 22. Public Safety Incident Taxonomies in the 2020 Public Annual Reports</figcaption>
 
Category | Field | Uber | Lyft
 ---- | ---- | ---- | ----
Collisions | IncidentAccidentType | <ul><li>Multiple Vehicle Collision</li><li>Open Door Into Vehicle</li><li>Pedestrian</li><li>Single Vehicle Collision</li><li>Struck Animal</li><li>Struck Debris</li><li>Struck Road Debris/Animal</li></ul> | <ul><li>No Damage</li><li>Not driveable</li><li>major damage</li><li>minor damage</li><li>not reported 
DUI | ZeroToleranceDescr | <ul><li>Rider alleged  the driver had the appearance of impairment</li><li>Rider alleged alcohol or containers present in vehicle</li><li>Rider alleged drugs or paraphernalia were present in the vehicle</li><li>Rider alleged the driver had the appearance of impairment</li><li>Rider alleged the driver sounded impaired</li><li>Rider alleged the smell of alcohol was present in the vehicle</li><li>Rider alleged the smell of marijuana was present in the vehicle</li><li>Rider alleged unsafe driving behavior</li></ul> | <ul><li>alleged_marijuana<br/>_smell__first_instance</li><li>alleged_zero_tolerance</li><li>passenger_alleged<br/>_drug_possession</li><li>pax_allegedly<br/>_had_open_container</li></ul>
Citations | CitationReason | _Unique incident description_ | _Unique incident description_

Table 23 shows the consequences to the driver resulting from public safety incidents.
As with incident classifications, the CPUC has in most cases not provided clear
guidance for how to report consequences to the driver, leaving companies to
determine themselves how to report driver consequences.[^2] Some classification of
consequences to the driver is reported for assaults and harassments, DUI complaints,
and citations, but not for collisions. Additionally, a binary indicator of whether
the involved driver is currently authorized to drive is available for assaults and
harassments and DUI complaints.

[^2]: To describe the driver consequences of assaults and harassments, Uber uses 2 response codes and Lyft uses 3
response codes. For DUI complaints, a description of the resolution and a driver consequence are reported. Uber uses 4
response codes to describe the DUI complaint, and the same 4 response codes to classify the driver consequence. Lyft
used 3 response codes to describe the DUI complaint resolution and 3 different response codes to describe the driver
consequences. The only consequence reported for citations is the payor of the citation. Lyft’s responses include both “LYFT”
and “DRIVER”, while Uber’s only include “Uber”.

<figcaption>Table 23. Driver Consequences and Status in the 2020 Public Annual Reports</figcaption>

Category | Field | Uber | Lyft
---- | ---- | ---- | ----
Assaults & Harassments | DriverConsequence | <ul><li>Deactivated</li><li>Waitlisted</li></ul> | <ul><li>Driver provided with warning and/or education</li><li>Driver was permanently deactivated</li><li>Driver was temporarily suspended</li></ul>
Assaults & Harassments | DriverCurrentAuth | <ul><li>N</li><li>Y</li></ul> | <ul><li>N</li><li>Y</li></ul>
Collisions | IncidentAccidentGuiltyParty | _not reported_ | _not reported_
Collisions | Liability | _not reported_ | _not reported_
Collisions | PrimaryCollisionFactor | <ul><li>Claimant Primarily</li><li>Driver Primarily</li><li>Undetermined</li></ul> | _not reported_
DUI | ComplaintResolveDescr | <ul><li>Driver Deactivated - Confirmed Allegation</li><li>Driver Deactivated - Third Unconfirmed Allegation</li><li>Driver Previously Deactivated</li><li>Driver Reactivated - Unconfirmed Allegation</li></ul> | <ul><li>Deactivation not warranted after investigation</li><li>Driver reactivated after investigation</li><li>Driver remained deactivated after investigation</li></ul>
DUI | DriverConsequence | <ul><li>Driver Deactivated - Confirmed Allegation</li><li>Driver Deactivated - Third Unconfirmed Allegation</li><li>Driver Previously Deactivated</li><li>Driver Reactivated - Unconfirmed Allegation</li></ul> | <ul><li>Driver provided with warning and/or education</li><li>Driver was permanently deactivated</li><li>Driver was temporarily suspended</li></ul>
DUI | DriverCurrentAuth | <ul><li>N</li><li>Y</li></ul> | <ul><li>N</li><li>Y</li></ul>

## How many drivers were suspended or deactivated?
While suspending a driver can adversely affect drivers’ livelihood by cutting off an
income stream, suspending a driver is one of the actions a TNC company can take to
protect its customers. Though each company used their own taxonomy for reporting
driver consequences, both identified whether a driver was temporarily suspended or
permanently deactivated. Table 24 shows the consequences to drivers resulting from
assaults and harassments.

For this analysis, temporary suspensions are those that Uber classified as “Waitlisted”
and Lyft classified as “Driver was temporarily suspended”, and permanent deactivations
are those that Uber classified as “Deactivated” and Lyft classified as “Driver was
permanently deactivated”. The table shows that 76% of Uber’s reported assaults and
harassment resulted in a temporary suspension, and 24% resulted in a permanent
deactivation, while 3% of Lyft’s reported assaults and incidents of harassment resulted
in a temporary suspension, 2% resulted in a permanent deactivation, and 95% were
neither temporarily suspended nor deactivated. The data suggests that Uber more
aggressively suspends or deactivated drivers than Lyft does. It also suggests that the
companies use different standards for reporting assaults and harassments.

<figcaption>Table 24. Driver Consequences of Assaults & Harassments from September 2019 to August 2020</figcaption>

Metric | Uber | Lyft | Total
 ---- | ----: | ----: | ----:
Total Incidents | 1,573 | 18,178 | 19,751
Temporary Suspensions | 1,200 | 582 | 1,782
Permanent Deactivations | 373 | 297 | 670
Not temporarily suspended or permanently deactivated | 0 | 17,299 | 17,299
**Percent temporarily suspended** | **76%** | **3%** | **9%**
**Percent permanently deactivated** | **24%** | **2%** | **3%**
**Percent neither temporarily suspended nor decativated** | **0%** | **95%** | **88%**

The CPUC requires that “[p]romptly after a zero-tolerance complaint is filed, the TNC
shall suspend the driver for further investigation.”[^3] As with assaults and harassments,
driver consequences of DUI complaints are reported with different taxonomies by each
company, but each identifies temporary suspensions and permanent deactivations.
Table 25 shows the driver consequences resulting from DUI complaints for each
company. In this analysis, permanent deactivations are those Uber classified as “Driver
Deactivated — Confirmed Allegation”, “Driver Deactivated — Third Unconfirmed
Allegation”, and “Driver Previously Deactivated”, and Lyft classified as “Driver was
permanently deactivated”. Temporary suspensions are those Uber classified as “Driver
Reactivated — Unconfirmed Allegation” and Lyft classified as “Driver was temporarily
suspended”. The remaining record records are those which Lyft classified as “Driver
provided with warning and/or education,” which implies neither a temporary
suspension nor permanent deactivation. The table suggests that Lyft frequently fails
to comply with the CPUC’s requirement to suspend drivers following DUI complaints,
only suspending or deactivating drivers in 6% of cases. By contrast, 94% of DUI
complaints against Uber drivers resulted in a temporary suspension, and 6% resulted in
a permanent deactivation.

[^3]: D. 13-09-045, p. 27. CPUC Rulemaking R12-12-011. 9/19/2013.

<figcaption>Table 25. Driver Consequences of DUI Complaints from September 2019 to August 2020</figcaption>

Metric | Uber | Lyft | Total
 --- | ---: | ---: | ---:
Total Incidents | 7,358 | 7,745 | 15,103
Temporary Suspensions | 6,911 | 468 | 7,379
Permanent Deactivations | 447 | 37 | 484
Not temporarily suspended or permanently deactivated | 0 | 7,240 | 7,240
**Percent temporarily suspended** | **94%** | **6%** | **49%**
**Percent permanently deactivated** | **6%** | **< 1%** | **3%**
**Percent neither temporarily suspended nor decativated** | **0%** | **93%** | **48%**

Driver suspensions are also reported in the Suspended Drivers report. These
suspensions, unlike the ones reported above, are not linked to a specific type
of incident. Figure 16 shows the total driver suspensions for each company. Lyft
suspended nearly 5 times the number of drivers as Uber. Lyft also permanently
suspended 50% more drivers than Uber.

{{% plotly_bar id="Fig16" csvfile="content/ch4_public_safety/suspensions-uber.csv" height="full" width="full" style="uber2" bmode="stack" orientation="h" %}}
{{% plotly_bar id="Fig16" csvfile="content/ch4_public_safety/suspensions-lyft.csv" height="full" width="full" style="lyft2" bmode="stack" orientation="h" %}}
<figcaption>Figure 16. Driver Suspensions from September 2019 to August 2020</figcaption><br/>

Figure 17 shows driver suspension rates by company. Lyft suspended drivers at
more than 11 times the rate of Uber and permanently suspended drivers at 15 times
the rate of Uber.

{{% plotly_bar id="Fig17" csvfile="content/ch4_public_safety/suspension_rates-uber.csv" height="full" width="full" style="uber2" bmode="stack" orientation="h" %}}
{{% plotly_bar id="Fig17" csvfile="content/ch4_public_safety/suspension_rates-lyft.csv" height="full" width="full" style="lyft2" bmode="stack" orientation="h" %}}
<figcaption>Figure 17. Driver Suspensions per 100,000 Trips from September 2019 to August 2020</figcaption><br/>

These two figures reveal either that each company has significantly different
approaches to driver suspensions or that they report driver suspensions differently.

For each driver suspension, the companies report whether drivers were permanently
deactivated, and whether they have been reactivated. Driver suspensions by
suspension type and reactivation status for Uber are shown in Table 26 and for Lyft in
Table 27. Presumably, a driver that is permanently deactivated cannot be reactivated.
As expected, none of Lyft’s permanently suspended drivers are reported to be
reactivated. But Uber data shows that 1,250 (30%) of the 4,162 drivers classified as
permanently suspended are also classified as reactivated. It is unclear whether these
drivers are permanently deactivated or not. If they were reactivated, it is not clear why
their permanent suspension was overturned, or the potential impacts to the safety of
passengers and the general public.

<figcaption>Table 26. Uber Driver Suspension Type by Driver Reactivation Status from
September 2019 to August 2020</figcaption>

Status | Not Reactivated | Reactivated | Total
---- | ----: | ----: | ----:
Not Permanently Suspended | 110 | 9,505 | 9,615
Permanently Suspended | 2,912 | 1,250 | 4,162
**Total** | **3,022** | **10,755** | **13,777**

<figcaption>Table 27. Lyft Driver Suspension Type by Driver Reactivation Status from
September 2019 to August 2020</figcaption>

Status | Not Reactivated | Reactivated | Total
---- | ----: | ----: | ----:
Not Permanently Suspended | 9,974 | 49,322 | 59,296
Permanently Suspended | 6,492 |   | 6,492
**Grand Total** | **16,466** | **49,322** | **65,788**

<a href="../ch3_general" class="button">< 3. General Characteristics</a>
<a href="../ch5_labor" class="button">5. Labor ></a>