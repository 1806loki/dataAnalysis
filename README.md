# Wine Data Analysis

## Overview

This project analyzes the Wine Data Set to calculate statistical measures such as mean, median, and mode for different properties of wines. It also introduces a new property called "Gamma" for each data point and calculates its statistics.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/1806loki/dataAnalysis.git
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

Start the application:

```bash
 yarn start
```

Open your browser and navigate to <http://localhost:3000> to view the application.

## Data Analysis

Mean Calculation
The calculateMean function calculates the mean value of a specified property (property) for a given alcohol class (alcoholClass). It filters the data based on the alcohol class and then calculates the mean of the specified property for the filtered data.

Median Calculation
The calculateMedian function calculates the median value of a specified property (property) for a given alcohol class (alcoholClass). It filters the data based on the alcohol class, sorts the filtered data, and then calculates the median of the specified property for the filtered data.

Mode Calculation
The calculateMode function calculates the mode value of a specified property (property) for a given alcohol class (alcoholClass). It filters the data based on the alcohol class, calculates the frequency of each value of the specified property, and then determines the mode value(s) based on the frequencies.

New Property: Gamma
The calculateGamma function creates a new property called "Gamma" for each data point in the dataset. The "Gamma" value is calculated as Gamma = (Ash \* Hue) / Magnesium. After calculating the "Gamma" values, it calculates the mean, median, and mode of "Gamma" for the entire dataset.

Built With
TypeScript
React
Mantine v7
![Screenshot 2024-04-19 231346](https://github.com/1806loki/dataAnalysis/assets/127595726/8a22223c-f6dc-4529-9aec-82d2564925cb)
![Screenshot 2024-04-19 231340](https://github.com/1806loki/dataAnalysis/assets/127595726/6a9e7cda-ceaa-4274-b6fb-d16091baf73a)
