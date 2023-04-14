---
title: "Compliance & Integrity"
subtitle: "Chapter 2"
date: 2022-06-27
weight: 3
draft: false
---

This section examines whether the 2020 Annual Reports for Uber and Lyft comply with reporting requirements, and whether the data they contain is logical and internally consistent.  Data compliance and integrity is a prerequisite for useful analysis to enforce regulations and guide the development of public policy. 

## Are TNCs submitting the required reports?
Both companies filed the required 2020 Annual Reports.  In February 2022, the SFCTA requested and received the Public 2020 Annual Reports for Uber and Lyft from the CPUC.   

## Are the submitted reports complete?
Uber’s 2020 Annual Reports are complete, but Lyft’s 2020 Annual Reports are not complete.  Table 2 shows the percent of required public fields that are included in each report by each company.  It shows that Uber's 2020 Annual Reports contain all of the required data fields, but that Lyft's 2020 Annual Reports do not.  

<figcaption>Table 2: Report Completeness by Company</figcaption>

{{< conditional_format_table_by_condition header=true bgcolors="#f2f3cc,#fdf5d9,#ffe8e2" colors="#006c69,#3d3d3e,#c41d4a" conds="eq 1,eq Withheld,lt 1" >}}
Report Name,Uber,Lyft
Driver Names & IDs,Withheld,Withheld
Accessibility Report (Confidential),1.0,1.0
Accessibility Report (Public),1.0,1.0
Accessibility Complaints (Confidential),1.0,1.0
Accessibility Complaints (Pub),1.0,1.0
Accidents & Incidents,1.0,0.87
Assaults & Harassments,1.0,0.79
50000+ Miles,1.0,0.57
Number of Hours,1.0,1.0
Number of Miles,1.0,1.0
Driver Training,1.0,1.0
Law Enforcement Citations,1.0,0.81
Off-platform Solicitation,1.0,0.80
Aggregated Requests Accepted,1.0,1.0
Requests Accepted,1.0,0.26
Aggregated Requests Not Accepted,1.0,1.0
Requests Not Accepted,1.0,0.38
Suspended Drivers,1.0,1.0
Total Violations & Incidents,1.0,1.0
Zero Tolerance,1.0,0.82
{{< /conditional_format_table_by_condition >}}

It is not clear whether Lyft failed to submit the required data or whether CPUC staff removed it from the public versions of the reports.  Among the missing data are date, time, and location data, and vehicle make, model, and year.  With both companies, there are cases where even when required data fields are included in the reports, the actual data itself is missing from these fields.  See Appendix B: Report Completeness Inventory for detailed accounting of each report’s completeness.  

A closer look at the data can reveal other issues.  For example, Figure 2 shows the daily total number of completed trips from Uber’s Requests Accepted report, revealing that the first two weeks of March 2020 are missing.  It is unclear whether any other Uber reports are also missing data from these two weeks.  Lyft’s incomplete Requests Accepted report prohibits identification of data gaps and irregularities and prevents regulatory oversight.  Note that the two missing weeks do not correspond to local Covid Shelter-in-Place (SIP) orders, which went into effect the week following the missing data.

{{% plotly_line id="Fig2" csvfile="content/ch2_compliance/uber_ts.csv" title="Uber Trips by Day" height="full" width="full" style="ta" %}}

<figcaption>Figure 2: Uber Trips by Day, Before and During the Pandemic</figcaption><br/>

## Is the reported data internally consistent?
Internal consistency means that the data in one part of a company’s Annual Reports does not contradict data in another part.  Contradictory or internally inconsistent data prevents effective regulatory oversight.  For a subset of metrics, the TNC annual reports contain multiple sources of information from different reports, and each company's reports should produce consistent metrics across all the sources.   This section evaluates the internal consistency of the follow metrics which are among the most basic descriptors of TNC activity:

 - Trip requests
 - Completed trips
 - Unaccepted trip requests
 - Vehicle miles traveled (VMT)
 - Driver days
 - Driver hours  
 
The 2020 Annual Reports for both Uber and Lyft are contradictory and internally inconsistent, even for the most basic metrics.  Where they can be compared, the Lyft's internal inconsistencies are much greater than Uber’s. In cases where Lyft's reports are incomplete, their internal consistency cannot be evaluated.  


### Total Trip Requests
The total number of trip requests is a measure of TNC demand.  It can be calculated 3 ways using 5 reports:
1.  by adding the counts of the number of records in the Requests Accepted and Requests Not Accepted reports,
2.  by adding the number of requests in the Aggregated Requests Accepted and Aggregated Requests Not Accepted report, and
3.  by adding the total trip requests in the Accessibility Report (Confidential).[^8]

[^8]: Despite the term "Confidential" in the name of this report, it is designated as public per the 2020 Confidentiality Ruling.    

Table 3 and Table 4 show Uber’s and Lyft’s total trip requests by source.  Uber’s reported trip requests range from 160.8 million to 180.5 million, a difference of nearly 20 million, or 12%.  Lyft’s reported trip requests range from 66.2 million to 116 million, a difference of almost 50 million, or 75%.  The total number of trip requests reported by Uber and Lyft is internally inconsistent. Lyft’s internal inconsistencies are up to 13 times greater than Uber’s internal inconsistencies.  

<figcaption>Table 3: Total Uber Trip Requests by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size = -0.5>(from _Requests Accepted_, _Requests Not Accepted_)</font> | 160,849,005 | - | - |
| Aggregate by zip code <br/><font size = -0.5>(from _Aggregated Requests Accepted_, _Aggregated Requests Not Accepted_)</font> | 170,145,612 | 9,296,607 | 6% |
| Aggregate by month <br/><font size = -0.5>(from _Accessibility Report_)</font> | 180,483,335 | 19,634,330 | 12% |

<figcaption>Table 4: Total Lyft Trip Requests by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size = -0.5>(from _Requests Accepted_, _Requests Not Accepted_)</font> | 66,292,592 | - | - |
| Aggregate by zip code <br/><font size = -0.5>(from _Aggregated Requests Accepted_, _Aggregated Requests Not Accepted_)</font> | 116,006,968 | 49,714,376 | 75% |
| Aggregate by month <br/><font size = -0.5>(from _Accessibility Report_)</font> | 90,937,292 | 24,644,700 | 37% |
  
### Completed Trips
Completed trips are a measure of total travel, and can be used to evaluate a company’s share of the TNC market and the TNC share of the total travel market.  It is the most basic statistic describing TNC service.  Completed trips are reported in the _Requests Accepted_ report as a list where each record represents a completed trip, and in the _Aggregated Requests Accepted_ report which contains annual completed trip totals for the reporting period by zip code.[^9]

[^9]:It is not clear whether the number of trips ("TotalAcceptedTrips") in Aggregated Requests Accepted refers to person-trips or requests.  Because the report name implies requests, we treat them as such.  By contrast, each record in Requests Accepted is clearly a request, and the party size is designated by (“VehicleOccupancy”).   
 
Table 5 and Table 6 show the number of completed trips reported by Uber and Lyft in each report.  Uber reported 157.2 million trips in one report and 166.5 million trips in the other, a difference of 9.3 million, or 6%.  Lyft reported 60.1 million trips in one report and 110.8 million trips in the other, a difference of 49.7 million, or 81%.  The total number of completed trips reported by both Uber and Lyft is internally inconsistent.  Lyft’s internal inconsistencies are 14 times greater than Uber’s internal inconsistencies.   

<figcaption>Table 5: Uber Completed Trips by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size=-0.5>(from _Requests Accepted_)</font> | 157,167,691 | - | - |
| Aggregated by zip code <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 166,464,298 | 9,296,607 | 6% |

<figcaption>Table 6: Lyft Completed Trips by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size=-0.5>(from _Requests Accepted_)</font> | 61,072,046 | - | -
| Aggregated by zip code <br/><font size=-0.5>(from _Aggregated Requests Accepted_)</font> | 110,786,422 | 49,714,376 | 81%
  
### Unaccepted Trip Requests
Unaccepted trip requests are a measure of unserved demand and can be used to calculate completion rates.  Unaccepted trip requests are reported in Requests Not Accepted as a list and in Aggregated Requests Not Accepted as annual totals aggregated by zip code.  

Table 7 and Table 8 show the total requests that were not accepted reported by Uber and Lyft in each report.  Uber’s total trip requests are reported identically in each report.  Lyft’s total trip requests are reported identically in each report.  Unlike total trip requests and completed trips, both Uber’s and Lyft’s unaccepted trip requests are internally consistency.  

<figcaption>Table 7: Uber Unaccepted Trip Requests by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size=-0.5>(from _Requests Not Accepted_)</font> | 3,681,314 | - | - |
| Aggregate by zip code <br/><font size=-0.5>(from _Aggregated Requests Not Accepted_)</font> | 3,681,314 | 0 | 0% |

<figcaption>Table 8: Lyft Unaccepted Trip Requests by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size=-0.5>(from _Requests Not Accepted_)</font> | 5,220,546 | - | - |
| Aggregate by zip code <br/><font size=-0.5>(from _Aggregated Requests Not Accepted_)</font> | 5,220,546 | 0 | 0% |

### Vehicle Miles Traveled
Vehicle Miles Traveled (VMT) is a measure of the total amount of travel.  It is used in environmental analysis to calculate emissions, and is a key indicator of congestion.  It is reported by trip in Requests Accepted and aggregated by driver-day in Number of Miles.   

Table 9 and Table 10 show VMT reported by Uber and Lyft in each report.  Uber reports 1.6 billion VMT in Requests Accepted and 0.7 billion VMT in Number of Miles, a difference of nearly -1 billion VMT, or -59%.  Lyft withheld VMT from Requests Accepted and reported 1.1 billion VMT in Number of Miles.  Uber’s VMT is not internally consistent, and Lyft’s VMT is incomplete and cannot be assessed for consistency.

<figcaption>Table 9: Uber VMT by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size=-0.5>(from _Requests Accepted_)</font> | 1,624,860,871 | - | - |
| Aggregate by driver day <br/><font size=-0.5>(from _Number of Miles_)</font> | 662,247,794 | -962,613,077 | -59% |

<figcaption>Table 10: Lyft VMT by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list <br/><font size=-0.5>(from _Requests Accepted_)</font> | Missing | - | - |
| Aggregate by driver day <br/><font size=-0.5>(from _Number of Miles_)</font> | 1,082,681,881 | Unknown | Unknown |

### Driver Days

Driver days are one measure of labor conditions and can be used to evaluate compliance with labor laws.  Each record in the _Number of Miles_ and the _Number of Hours_ reports represents a driver-day.  

Table 11 and Table 12 show the total driver days reported by Uber and Lyft in each report.  Uber reports 9.7 million driver-days in one report and 11.1 million in the other, a difference of 1.4 million, or 15%.  Lyft reports 13.6 million driver-days in one report and 13.5 in the other, a difference of 100,000, or -1%.  Uber and Lyft’s driver-days are internally inconsistent.  Uber’s internal inconsistency is 22 times higher than Lyft’s internal inconsistency.   

<figcaption>Table 11: Uber Driver Days by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Aggregate by driver day <br/><font size=-0.5>(from _Number of Miles_)</font> | 9,666,788 | - | - |
| Aggregate by driver day <br/><font size=-0.5>(from _Number of Hours_)</font> | 11,112,666 | 1,445,878 | 15% |

<figcaption>Table 12: Lyft Driver Days by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Aggregate by driver day <br/><font size=-0.5>(from _Number of Miles_)</font> | 13,602,436 | - | - |
| Aggregate by driver day <br/><font size=-0.5>(from _Number of Hours_)</font> | 13,509,188 | -93,248 | -1% |

### Driver Hours
Driver hours are another measure of labor conditions and can support evaluation of compliance with labor laws.  _Number of Miles_ reports total driver hours by driver day, and _Requests Accepted_ reports driver hours by trip for Period 2 (when a driver is en-route to pick up a passenger) and Period 3 (when the passenger is in the vehicle), but not in Period 1 (when a driver is waiting for a ride request).  Therefore, the total of Period 2 and Period 3 hours in _Requests Accepted_ should be strictly less than the total hours in _Number of Hours_.  

Table 13 and Table 14 show driver hours reported by Uber and Lyft in each report.  Uber reported a total 58.9 million hours in Requests Accepted and 46.9 million hours in Number of Miles.  Requests Accepted only includes hours for Periods 2 and 3, and should be less than Number of Miles which includes hours for Periods 1, 2 and 3, but confusingly it contains 12 million fewer hours, or -20%.  Driver hours cannot be calculated from Lyft’s Requests Accepted report because CPUC staff removed its datetime data.    Lyft reports 52.3 million driver hours in Number of Hours.  Uber’s driver hours are not internally consistent.  Lyft’s driver hours are incomplete and cannot be evaluated for internal consistency.

<figcaption>Table 13: Uber Driver Hours by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list, P2+P3 only <br/><font size=-0.5>(from _Requests Accepted_)</font> | 58,897,421 | - | - |
| Aggregate by driver day, P1+P2+P3 <br/><font size=-0.5>(from _Number of Hours_)</font> | 46,885,564 | -12,011,857 | -20% |

<figcaption>Table 14: Lyft Driver Hours by Report</figcaption>

| Source | Trip Requests | Difference | Percent Difference |
| :---   |    :---:      |   :---:    |      :---:         |
| Disaggregate trip list, P2+P3 only <br/><font size=-0.5>(from _Requests Accepted_)</font> | Missing | - | - |
| Aggregate by driver day, P1+P2+P3 <br/><font size=-0.5>(from _Number of Hours_)</font> | 52,351,454 | Unknown | Unknown |

### Summary of Internal Consistency

Table 15 summarizes the internal consistency findings for the 6 metrics for each company.  The only metric Uber and Lyft reported in an internally consistent manner was unaccepted requests.  Uber’s reports were internally inconsistent for the remaining 5 metrics.  Of the remaining metrics, Lyft’s reports were internally inconsistent for 3 and could not be evaluated for 2 because they withheld required data.  

<figcaption>Table 15: Summary of Internal Consistency by Company and Metric</figcaption>

{{< conditional_format_table header=true bgcolors="#f2f3cc,#fdf5d9,#ffe8e2" colors="#006c69,#3d3d3e,#c41d4a"  cvals="Consistent,Inconsistent,Incomplete" >}}
Metric, Uber, Lyft
Total Requests,Inconsistent,Inconsistent
Completed Trips,Inconsistent,Inconsistent
Unaccepted Requests,Consistent,Consistent
VMT,Inconsistent,Incomplete
Driver Days,Inconsistent,Inconsistent
Driver Hours,Inconsistent,Incomplete
{{< /conditional_format_table >}}

The extent and scale of these inconsistencies precludes the CPUC from properly executing its regulatory oversight of TNCs.  For example, whether Lyft completed 61 million trips or 110 million trips is critical to understanding the overall TNC market size, and Lyft’s share of the market.  The difference of one billion VMT in Uber’s Annual Reports is highly relevant for understanding California’s progress in meeting emissions goals. 

<a href="../ch1_introduction" class="button">< 1. Introduction</a>
<a href="../ch3_general" class="button">3. General Characteristics ></a>