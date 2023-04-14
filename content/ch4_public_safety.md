---
title: "Public Safety"
subtitle: "Chapter 4"
date: 2022-07-21
weight: 4
draft: false
---

The Passenger Charter-party Carriers’ Act, enacted in 1961, authorizes the CPUC to regulate “[t]he use of public highways for the transportation of passengers for compensation … and to promote carrier and public safety through its safety enforcement regulations.”   The CPUC requires TNCs submit a number of annual reports relevant to passenger and public safety:
 - _Accidents & Incidents_ documents vehicle collisions
 - _Assaults & Harassments_ documents reports of assault and harassment
 - _Law Enforcement Citations_ documents citations issued by law enforcement officers
 - _Zero Tolerance_ documents reports of driving under the influence.  

This section presents a variety of metrics including incident totals, rates per square mile, and rates per 100,000 trips.  Areal (per square mile) rates are useful for understanding incidents that may impact the general public and trip-based rates are useful for understanding risks to TNC users.  Ideally, a VMT-based would be preferable to a trip-based rate, but because the failure to produce complete Lyft reports it is not possible to do so.  

## How many TNC public safety incidents were reported?

Figure 8 shows the number of incidents reported by each company within the categories collisions, assaults and harassments, DUI complaints, and citations.  Uber reported 30,000 public safety incidents, while Lyft reported almost 45,000 public safety incidents. There were nearly 27,000 collisions, nearly 20,000 assaults and harassments (almost all of them reported by Lyft), 15,000 DUI complaints, 14,000 citations.  

{{% plotly_bar id="Fig8" csvfile="content/ch4_public_safety/public_safety_incidents_total.csv" title="Total Public Safety Issues by Category" height="full" width="full" style="tnc" bmode="stack" %}}
<figcaption><b>Figure 8: Public Safety Issues by Category</b></figcaption><br/>

Figure 9 shows the rates of incidents per 100,000 trips.  Lyft reported total public safety incidents rates that were more than 3 times higher than Uber.  Lyft’s collisions rates that were twice Uber’s.  Lyft’s assaults and harassment rates were more than 30 times Uber’s, Lyft’s DUI complaints were over 2.5 times Uber’s, and Lyft’s citations were twice Uber’s.  This analysis suggests that either the data is not being reported consistently by the two companies, or that there is a greater public safety risk riding in Lyft than riding in Uber.  Both conditions suggest the need for increased review by regulators. 

{{% plotly_bar id="Fig9" csvfile="content/ch4_public_safety/public_safety_incidents_rate.csv" title="Public Safety Issues per 100,000 Trips" height="full" width="full" style="colorblind" bmode="stack" %}}
<figcaption>Figure 9: Incidents per 100,000 trips by Company and Category</figcaption><br/>

## Where did public safety incidents occur?

Assaults and harassments, collisions, and DUI complaints happened everywhere that TNC trips happened.  
Figure 10 shows incident totals and rates per 100,000 trips by category for the top 10 counties by number of trips.  Incident rates vary by county and by company.  San Francisco, which has the highest density of trips, has among the lowest public safety incident rates.  By contrast, Sacramento, which has a low trip density, has the highest rate of public safety incidents.  This may be partly explained by trip lengths, as denser counties with shorter average trip lengths may be less likely to be involved in a public safety incident on any particular trip.  However, the failure to produce complete Lyft reports precludes an analysis of the relationship between public safety events and trip lengths. 
Lyft’s public safety incident rates were much higher than Uber’s in each of the top 10 counties with the most TNC trips.  The percent difference in incident rates between the companies was closes in Los Angeles County, where Lyft’s rate is 122% higher than Ubers, and furthest in Santa Clara County, where Lyft’s rate is 268% higher than Uber’s.  

{{% plotly_bar id="Fig10" csvfile="content/ch4_public_safety/public_safety_incidents_rates_by_county.csv" title="Public Safety Incident Rates by County" height="full" width="full" style="tnc" bmode="" %}}
<figcaption>Figure 10: Rates of Public Safety Incidents by Company and County<figcaption><br/>


Assaults and harassments, collisions, and DUI complaints, like trip requests were reported by Zip Code.  Citations, per the Law Enforcement Citations template were reported with a “CitationLocation”.  However, CPUC staff did not provide explicit requirements how the location should be reported and as a consequence each company reported it differently.  

Table 19 shows the total number of citations by location. It is not clear why the vast majority of the citations reported by the companies occurred at airports.  Uber reported 7,711 citations, all at airports.  Lyft reported 6,259 citations, 6,038 (96%) of which were at airports, while 214 were in cities, and the remaining 7 were in other locations.  We are not aware of any publicly available guidance from the CPUC or CPUC staff that indicates that only airport citation events should be reported.  The apparent failure to include all TNC citations in the Annual Reports prevents the CPUC from assessing a key public safety indicator.  

<figcaption>Table 19: Citations by Location</figcaption>

Location | Uber | Lyft | Total
 ----- | ---- | ---- | -----
Citations at Airports | 7,711 | 6,038 | 13,749
Citations in Cities | 0 | 214 | 214
Citations at Other Locations | 0 | 7 | 7
Total Citations | 7,711 | 6,259 | 13,970

## When did public safety incidents occur?

Public safety incidents happened on all days of the week and were highest on Fridays and Saturdays.

Figure 11 shows average assaults and harassments, collisions, and DUI complaints by day of week compared to the total number of Uber trips by day of week.  Each category of public safety incident follows a different pattern.  Assaults & harassments increased throughout the week, surprisingly reaching their peak on Sunday, which is the day with the least number of TNC trips according to Uber’s data.  Collisions follow trip volumes most closely, increasing throughout the week before peaking on Friday and declining to the lowest on Sunday.  DUI complaints are highest on weekends, but while Sunday is not as high as Friday or Saturday, it is still elevated above the other weekdays.  Citations reports did not include date or time information and could not be evaluated.

{{% plotly_line2axes id="Fig11" csvfile="content/ch4_public_safety/public_safety_incidents_day_of_week.csv" title="Public Safety Issues per 100,000 Trips by Day of Week" height="full" width="full" style="colorblind" style2="greydash" y2_series="4" yaxis_title="Public Safety Incidents" yaxis2_title="Uber Trips" %}}
<figcaption>Figure 11: Incidents per 100,000 trips by Day of Week</figcaption><br/>

Uber’s and Lyft’s time-of-day profiles of public safety incidents for each of these categories differs significantly from each other.  Uber’s time-of-day profiles are more intuitively plausible than Lyft’s.  This suggests that there may either be real differences between the services, with serious safety issues on Lyft during the late night and early morning, or that there are data reporting issues.  

## What types of public safety incidents occurred?

The CPUC has not standardized reporting requirements for collisions, assaults and harassments, DUI complaints, or law enforcement citations.  In the absence of clear and consistent requirements, each company decides themselves how they report public safety data.  As a result, this report is limited to only summarizing overall number of incidents and is precluded from a more detailed analysis of types of public safety incidents.  The CPUC’s failure to standardize reporting requirements for the typos of public safety incidents precludes the CPUC from exercising any meaningful or consistent regulatory oversight with respect to these public safety concerns. 

Table 20 shows how each company reports the types of public safety incident for collisions, DUI complaints, and citations.  Note that the public version of Assaults & Harassments does not contain any incident descriptions or categorizations.  The table that each company uses a different taxonomy to categorize the type of collision.  Uber uses 7 response codes briefly describing the collision type.  Lyft uses 5 response codes that describe, not the type of collision, but a qualitative description of the extent of damage.  For DUI complaints, Uber uses 8 response codes, all describing allegations against the driver.  Lyft used 4 response codes, 2 for describing allegations against the driver and 2 describing allegations against the passenger.  One of the response codes is qualified as a first occurrence, “alleged_marijuana_smell__first_instance”, but no other response codes for further occurrences.  The other codes Lyft uses are not qualified in this way.  For citations, Uber used 657 unique response codes and Lyft used 347 unique response codes. 

<figcaption>Table 20: Public Safety Incident Taxonomies</figcaption>
 
Category | Field | Uber | Lyft
 ---- | ---- | ---- | ----
Collisions | IncidentAccidentType | <ul><li>Multiple Vehicle Collision</li><li>Open Door Into Vehicle</li><li>Pedestrian</li><li>Single Vehicle Collision</li><li>Struck Animal</li><li>Struck Debris</li><li>Struck Road Debris/Animal</li></ul> | <ul><li>No Damage</li><li>Not driveable</li><li>major damage</li><li>minor damage</li><li>not reported 
DUI | ZeroToleranceDescr | <ul><li>Rider alleged  the driver had the appearance of impairment</li><li>Rider alleged alcohol or containers present in vehicle</li><li>Rider alleged drugs or paraphernalia were present in the vehicle</li><li>Rider alleged the driver had the appearance of impairment</li><li>Rider alleged the driver sounded impaired</li><li>Rider alleged the smell of alcohol was present in the vehicle</li><li>Rider alleged the smell of marijuana was present in the vehicle</li><li>Rider alleged unsafe driving behavior</li></ul> | <ul><li>alleged_marijuana_smell__first_instance</li><li>alleged_zero_tolerance</li><li>passenger_alleged_drug_possession</li><li>pax_allegedly_had_open_container</li></ul>
Citations | CitationReason | _Unique incident description_ | _Unique incident description_

Table 22 shows the consequences to the driver resulting from public safety incidents.  As with incident classifications, the CPUC has in most cases not provided clear guidance for how to report consequences to the driver, leaving companies to determine themselves how to report driver consequences.  Some classification of consequences to the driver is reported for assaults and harassments, DUI complaints, and citations, but not for collisions.  Additionally, a binary indicator of whether the involved driver is currently authorized to drive is available for assaults and harassments and DUI complaints.  Uber uses 2 response codes to describe driver consequences resulting from assaults and harassments, one of which, “Waitlisted”, is ambiguous.  Lyft uses 3 response codes.  For DUI complaints, a description of the resolution (“ComplaintResolveDescr”) and a driver consequence (“DriverConsequence”) are reported.  Uber uses 4 response codes to describe the DUI complaint, and the same 4 response codes to classify the driver consequence.  One of them, “Driver Previously Deactivated”, raises a question: if the driver is deactivated, how were they driving?  Lyft used 3 response codes to describe the DUI complaint resolution.  Lyft also used 3 response codes to describe the driver consequences, two of which appear not to be mutually exclusive, “Driver provided with warning and/or education” and “Driver was temporarily suspended”, although only a single driver consequence is reported for any DUI complaint.  The only consequence reported for citations is the payor of the citation.  Lyft’s responses include both “LYFT” and “DRIVER”, while Uber’s only include “Uber”.  This may indicate that either Uber always pays when its drivers are cited, or that they only report citations that they pay.


<figcaption>Table 21: Driver Consequences and Status</figcaption>

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

Suspending a driver is one of the actions a TNC company can take to protect its consumers, but which can also adversely affect drivers’ livelihood.  Though each company used their own taxonomy for reporting driver consequences, both identified whether a driver was temporarily suspended or permanently deactivated.  Table 22 shows the consequences to drivers resulting from assaults and harassments.  For this analysis, temporary suspensions are those that Uber classified as “Waitlisted” and Lyft classified as “Driver was temporarily suspended”, and permanent deactivations are those that Uber classified as “Deactivated” and Lyft classified as “Driver was permanently deactivated”.    The table shows that 76% of Uber’s reported assaults and harassment resulted in a temporary suspension, and 24% resulted in a permanent deactivation, while 3% of Lyft’s reported assaults and incidents of harassment resulted in a temporary suspension, 2% resulted in a permanent deactivation, and 95% were neither temporarily suspended nor deactivated.   The data either tells us that Uber more aggressively suspends or deactivated drivers than Lyft does, or that Uber only reports assaults and harassments that result in a suspension or deactivation.  

<figcaption>Table 22: Driver Consequences of Assaults & Harassments</figcaption>

Metric | Uber | Lyft | Total
 ---- | ----: | ----: | ----:
Total Incidents | 1,573 | 18,178 | 19,751
Temporary Suspensions | 1,200 | 582 | 1,782
Permanent Deactivations | 373 | 297 | 670
Not temporarily suspended or permanently deactivated | 0 | 17,299 | 17,299
_Percent temporarily suspended_ | _76%_ | _3%_ | _9%_
_Percent permanently deactivated_ | _24%_ | _2%_ | _3%_
_Percent neither temporarily suspended nor decativated_ | _0%_ | _95%_ | _88%_

The CPUC requires that “[p]romptly after a zero-tolerance complaint is filed, the TNC shall suspend the driver for further investigation.”   As with assaults and harassments, driver consequences of DUI complaints are reported with different taxonomies by each company, but each identifies temporary suspensions and permanent deactivations.  Table 23 shows the driver consequences resulting from DUI complaints for each company.  For this analysis, temporary suspensions are those Uber classified as “Driver Deactivated – Confirmed Allegation”, “Driver Deactivated – Third Unconfirmed Allegation”, and “Driver Previously Deactivated”, and Lyft classified as “Driver was permanently deactivated”.  Permanent deactivations are those Uber classified as “Driver Reactivated – Unconfirmed Allegation” and Lyft classified as “Driver was temporarily suspended”.  The remaining record records are those which Lyft classified as “Driver provided with warning and/or education,” which implies neither a temporary suspension nor permanent deactivation.  The table suggests that Lyft frequently fails to comply with the CPUC’s requirement to suspend drivers following DUI complaints, only suspending or deactivating drivers in 6% of cases.  By contrast, 94% of DUI complaints against Uber drivers resulted in a temporary suspension, and 6% resulted in a permanent deactivation.   

<figcaption>Table 23: Driver Consequences of DUI Complaints</figcaption>

Metric | Uber | Lyft | Total
 ---- | ---- | ---- | ----
Total Incidents | 7,358 | 7,745 | 15,103
Temporary Suspensions | 6,911 | 468 | 7,379
Permanent Deactivations | 447 | 37 | 484
Not temporarily suspended or permanently deactivated | 0 | 7,240 | 7,240
_Percent temporarily suspended_ | _94%_ | _6%_ | _49%_
_Percent permanently deactivated_ | _6%_ | _0%_ | _3%_
_Percent neither temporarily suspended nor decativated_ | _0%_ | _93%_ | _48%_

Driver suspensions are also summarized in the Suspended Drivers report.  Figure 15 shows the total driver suspensions for each company.  Lyft suspended nearly 5 times the number of drivers as Uber.  Lyft also permanently suspended more that 50% more drivers than Uber.  

{{% plotly_bar id="Fig15" csvfile="content/ch4_public_safety/suspensions.csv" title="Suspensions" height="full" width="full" style="accent" bmode="stack" %}}

<figcaption>Figure 15: Driver Suspensions</figcaption><br/>

Figure 16 shows driver suspension rates by company.  Lyft suspended drivers at more than 11 times the rate of Uber and permanently suspended drivers at 15 times the rate of Uber.

{{% plotly_bar id="Fig16" csvfile="content/ch4_public_safety/suspension_rates.csv" title="Suspension Rates" height="full" width="full" style="accent" bmode="stack" %}}

<figcaption>Figure 16: Driver Suspensions per 100,000 trips</figcaption><br/>

These two figures reveal either that each company has significantly different approaches to driver suspensions or that they report driver suspensions differently.  

For each driver suspension, the companies report whether drivers were permanently deactivated, and whether they have been reactivated.  Driver suspensions by suspension type and reactivation status for Uber are shown in Table 24 and for Lyft in Table 25.  Presumably, a driver that is permanently deactivated cannot be reactivated.  This is the case for Lyft, but Uber reports that 1,250 drivers were both permanently suspended and reactivated.  It is not clear what this means.  

<figcaption>Table 24: Uber Driver Suspension Type by Driver Reactivation Status</figcaption>

Status | Not Reactivated | Reactivated | Total
---- | ----: | ----: | ----:
Not Permanently Suspended | 110 | 9,505 | 9,615
Permanently Suspended | 2,912 | 1,250 | 4,162
Total | 3,022 | 10,755 | 13,777

<figcaption>Table 25: Lyft Driver Suspension Type by Driver Reactivation Status</figcaption>

Status | Not Reactivated | Reactivated | Total
---- | ----: | ----: | ----:
Not Permanently Suspended | 9,974 | 49,322 | 59,296
Permanently Suspended | 6,492 |   | 6,492
Grand Total | 16,466 | 49,322 | 65,788
