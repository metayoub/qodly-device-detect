# Overview

The **DeviceDetect** component is a simple component that can be used to detects whether the user is accessing the application from a mobile or a desktop. The component allows the user to choose the page to be displayed depending on the device type and store its value in the **Qodly Source** to be used throughout the application.

## Properties

| Name         | Type   | Description                                                                                            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------ |
| Mobile Page  | String | The name of the page to be displayed when the user is accessing the application from a mobile device.  |
| Desktop Page | String | The name of the page to be displayed when the user is accessing the application from a desktop device. |

## Data Access

| Name         | Required | Type   | Description                                                                 |
| ------------ | -------- | ------ | --------------------------------------------------------------------------- |
| Qodly Source | Yes      | String | Will contain name of the page to be displayed depending on the device type. |
