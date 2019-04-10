# coding=utf8
# the above tag defines encoding for this document and is for Python 2.x compatibility

import re
import os
import subprocess
import sys
import msvcrt as m

print "Find device ..."
proc = subprocess.Popen(["adb", "devices"], stdout=subprocess.PIPE, shell=True)
(out, err) = proc.communicate()

dev_name = ""

matches = re.finditer(r"^([a-zA-Z0-9]+)", out, re.MULTILINE)
for matchNum, match in enumerate(matches, start=1):
    for groupNum in range(0, len(match.groups())):
        dev_name = match.group(groupNum + 1)

if len(dev_name) <= 0 or dev_name.startswith("List"):
    print "Error, not found device"
    print "Press Enter to exit..."
    m.getch()
    sys.exit()

print "Device name: " + dev_name
print "Start react run android"

cmd = "adb -s " + dev_name + " reverse tcp:8081 tcp:8081 && react-native run-android"
subprocess.Popen("start cmd /c \"" + cmd + "\"", shell=True)
