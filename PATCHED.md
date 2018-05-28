# Patched 20180528

### Tag

git tag 13.1.1

git push origin :13.1.0
git push origin 13.1.1

git push bitbucket bugfix


### composer.json

From

    "name": "smile/module-debug-toolbar",
    
    "version": "3.1.0",


To

    "name": "patched/smile-module-debug-toolbar",
    
    "version": "13.1.1",


### registration.php

Comment below code to disable profiler:

```
$options = [
    'drivers' => [
        [
            'output' => false,
            'stat'   => new \Magento\Framework\Profiler\Driver\Standard\Stat(),
        ]
    ]
];

\Magento\Framework\Profiler::applyConfig($options, BP, false);
\Smile\DebugToolbar\Helper\Profiler::setStat($options['drivers'][0]['stat']);
```


### Helper/Profiler.php

Comment below code to remove profiler compute:

```
$this->helperProfiler->computeStats();
```

### Observer/AddZones.php

Comment below code in contructor to remove profiler:


```
ProfilerFactory $profilerBlockFactory,
```

```
$this->blockFactories[] = $profilerBlockFactory;
```