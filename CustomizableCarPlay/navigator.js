import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavaigator } from "@react-navigation/stack";

import Landing from "./pages/landing";
import login from "./pages/login";
import register from "./pages/register";
import home from "./pages/home";

const stack = createStackNavaigator();
