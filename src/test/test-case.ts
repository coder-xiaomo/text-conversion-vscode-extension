import { TestCaseGroup } from "../type-definition/TestCaseType";

const LF = '\n';
const CRLF = '\r\n';

const testGroups: Array<TestCaseGroup> = [
    {
        group: 'Input validation',
        testTitle: 'Input validation (输入有效性验证)',
        cases: [
            // 输入为空
            {
                title: 'empty input',
                input: '',
                eol: [LF, CRLF],
                transformText: [
                    '',
                ],
                output: {
                    camelCase: '',
                    pascalCase: '',
                    snakeCase: '',
                    snakeCamelCase: '',
                    snakePascalCase: '',
                    snakeUpperCase: '',
                    kebabCase: '',
                    kebabCamelCase: '',
                    kebabPascalCase: '',
                    kebabUpperCase: '',
                    spaceCase: '',
                    spaceCamelCase: '',
                    spacePascalCase: '',
                    spaceUpperCase: '',
                    lowerCase: '',
                    upperCase: '',
                },
            },
            {
                title: 'empty input (contains space)',
                input: '  ',
                eol: [LF, CRLF],
                transformText: [
                    '  ',
                ],
                output: {
                    camelCase: '  ',
                    pascalCase: '  ',
                    snakeCase: '  ',
                    snakeCamelCase: '  ',
                    snakePascalCase: '  ',
                    snakeUpperCase: '  ',
                    kebabCase: '  ',
                    kebabCamelCase: '  ',
                    kebabPascalCase: '  ',
                    kebabUpperCase: '  ',
                    spaceCase: '  ',
                    spaceCamelCase: '  ',
                    spacePascalCase: '  ',
                    spaceUpperCase: '  ',
                    lowerCase: '  ',
                    upperCase: '  ',
                },
            },
            {
                title: 'empty input (contains space and crlf enter 1)',
                input: ' \r\n ',
                eol: [CRLF],
                transformText: [
                    ' ',
                    ' ',
                ],
                output: {
                    camelCase: ' \r\n ',
                    pascalCase: ' \r\n ',
                    snakeCase: ' \r\n ',
                    snakeCamelCase: ' \r\n ',
                    snakePascalCase: ' \r\n ',
                    snakeUpperCase: ' \r\n ',
                    kebabCase: ' \r\n ',
                    kebabCamelCase: ' \r\n ',
                    kebabPascalCase: ' \r\n ',
                    kebabUpperCase: ' \r\n ',
                    spaceCase: ' \r\n ',
                    spaceCamelCase: ' \r\n ',
                    spacePascalCase: ' \r\n ',
                    spaceUpperCase: ' \r\n ',
                    lowerCase: ' \r\n ',
                    upperCase: ' \r\n ',
                },
            },
            {
                title: 'empty input (contains space and crlf enter 2)',
                input: ' x \r\ny ',
                eol: [CRLF],
                transformText: [
                    ' x ',
                    'y ',
                ],
                output: {
                    camelCase: ' x \r\ny ',
                    pascalCase: ' X \r\nY ',
                    snakeCase: ' x \r\ny ',
                    snakeCamelCase: ' x \r\ny ',
                    snakePascalCase: ' X \r\nY ',
                    snakeUpperCase: ' X \r\nY ',
                    kebabCase: ' x \r\ny ',
                    kebabCamelCase: ' x \r\ny ',
                    kebabPascalCase: ' X \r\nY ',
                    kebabUpperCase: ' X \r\nY ',
                    spaceCase: ' x \r\ny ',
                    spaceCamelCase: ' x \r\ny ',
                    spacePascalCase: ' X \r\nY ',
                    spaceUpperCase: ' X \r\nY ',
                    lowerCase: ' x \r\ny ',
                    upperCase: ' X \r\nY ',
                },
            },
            {
                title: 'empty input (contains space and lf enter 1)',
                input: ' \n ',
                eol: [LF],
                transformText: [
                    ' ',
                    ' ',
                ],
                output: {
                    camelCase: ' \n ',
                    pascalCase: ' \n ',
                    snakeCase: ' \n ',
                    snakeCamelCase: ' \n ',
                    snakePascalCase: ' \n ',
                    snakeUpperCase: ' \n ',
                    kebabCase: ' \n ',
                    kebabCamelCase: ' \n ',
                    kebabPascalCase: ' \n ',
                    kebabUpperCase: ' \n ',
                    spaceCase: ' \n ',
                    spaceCamelCase: ' \n ',
                    spacePascalCase: ' \n ',
                    spaceUpperCase: ' \n ',
                    lowerCase: ' \n ',
                    upperCase: ' \n ',
                },
            },
            {
                title: 'empty input (contains space and lf enter 2)',
                input: ' a\nb ',
                eol: [LF],
                transformText: [
                    ' a',
                    'b ',
                ],
                output: {
                    camelCase: ' a\nb ',
                    pascalCase: ' A\nB ',
                    snakeCase: ' a\nb ',
                    snakeCamelCase: ' a\nb ',
                    snakePascalCase: ' A\nB ',
                    snakeUpperCase: ' A\nB ',
                    kebabCase: ' a\nb ',
                    kebabCamelCase: ' a\nb ',
                    kebabPascalCase: ' A\nB ',
                    kebabUpperCase: ' A\nB ',
                    spaceCase: ' a\nb ',
                    spaceCamelCase: ' a\nb ',
                    spacePascalCase: ' A\nB ',
                    spaceUpperCase: ' A\nB ',
                    lowerCase: ' a\nb ',
                    upperCase: ' A\nB ',
                },
            },
            // 输入长文本
            {
                title: 'long text input',
                input:
                    `China's factory activity expanded in March after five consecutive months of contraction, an official survey revealed on Sunday, adding to a run of indicators that suggest the stabilization of the world's second-largest economy.`
                ,
                eol: [LF, CRLF],
                transformText: [
                    "china|'|s|factory|activity|expanded|in|march|after|five|consecutive|months|of|contraction|,|an|official|survey|revealed|on|sunday|,|adding|to|a|run|of|indicators|that|suggest|the|stabilization|of|the|world|'|s|second|largest|economy|."
                ],
                output: {
                    camelCase:
                        "china'SFactoryActivityExpandedInMarchAfterFiveConsecutiveMonthsOfContraction,AnOfficialSurveyRevealedOnSunday,AddingToARunOfIndicatorsThatSuggestTheStabilizationOfTheWorld'SSecondLargestEconomy."
                    ,
                    pascalCase:
                        "China'SFactoryActivityExpandedInMarchAfterFiveConsecutiveMonthsOfContraction,AnOfficialSurveyRevealedOnSunday,AddingToARunOfIndicatorsThatSuggestTheStabilizationOfTheWorld'SSecondLargestEconomy."
                    ,
                    snakeCase:
                        "china's_factory_activity_expanded_in_march_after_five_consecutive_months_of_contraction,an_official_survey_revealed_on_sunday,adding_to_a_run_of_indicators_that_suggest_the_stabilization_of_the_world's_second_largest_economy."
                    ,
                    snakeCamelCase:
                        "china'S_Factory_Activity_Expanded_In_March_After_Five_Consecutive_Months_Of_Contraction,An_Official_Survey_Revealed_On_Sunday,Adding_To_A_Run_Of_Indicators_That_Suggest_The_Stabilization_Of_The_World'S_Second_Largest_Economy."
                    ,
                    snakePascalCase:
                        "China'S_Factory_Activity_Expanded_In_March_After_Five_Consecutive_Months_Of_Contraction,An_Official_Survey_Revealed_On_Sunday,Adding_To_A_Run_Of_Indicators_That_Suggest_The_Stabilization_Of_The_World'S_Second_Largest_Economy."
                    ,
                    snakeUpperCase:
                        "CHINA'S_FACTORY_ACTIVITY_EXPANDED_IN_MARCH_AFTER_FIVE_CONSECUTIVE_MONTHS_OF_CONTRACTION,AN_OFFICIAL_SURVEY_REVEALED_ON_SUNDAY,ADDING_TO_A_RUN_OF_INDICATORS_THAT_SUGGEST_THE_STABILIZATION_OF_THE_WORLD'S_SECOND_LARGEST_ECONOMY."
                    ,
                    kebabCase:
                        "china's-factory-activity-expanded-in-march-after-five-consecutive-months-of-contraction,an-official-survey-revealed-on-sunday,adding-to-a-run-of-indicators-that-suggest-the-stabilization-of-the-world's-second-largest-economy."
                    ,
                    kebabCamelCase:
                        "china'S-Factory-Activity-Expanded-In-March-After-Five-Consecutive-Months-Of-Contraction,An-Official-Survey-Revealed-On-Sunday,Adding-To-A-Run-Of-Indicators-That-Suggest-The-Stabilization-Of-The-World'S-Second-Largest-Economy."
                    ,
                    kebabPascalCase:
                        "China'S-Factory-Activity-Expanded-In-March-After-Five-Consecutive-Months-Of-Contraction,An-Official-Survey-Revealed-On-Sunday,Adding-To-A-Run-Of-Indicators-That-Suggest-The-Stabilization-Of-The-World'S-Second-Largest-Economy."
                    ,
                    kebabUpperCase:
                        "CHINA'S-FACTORY-ACTIVITY-EXPANDED-IN-MARCH-AFTER-FIVE-CONSECUTIVE-MONTHS-OF-CONTRACTION,AN-OFFICIAL-SURVEY-REVEALED-ON-SUNDAY,ADDING-TO-A-RUN-OF-INDICATORS-THAT-SUGGEST-THE-STABILIZATION-OF-THE-WORLD'S-SECOND-LARGEST-ECONOMY."
                    ,
                    spaceCase:
                        "china's factory activity expanded in march after five consecutive months of contraction,an official survey revealed on sunday,adding to a run of indicators that suggest the stabilization of the world's second largest economy."
                    ,
                    spaceCamelCase:
                        "china'S Factory Activity Expanded In March After Five Consecutive Months Of Contraction,An Official Survey Revealed On Sunday,Adding To A Run Of Indicators That Suggest The Stabilization Of The World'S Second Largest Economy."
                    ,
                    spacePascalCase:
                        "China'S Factory Activity Expanded In March After Five Consecutive Months Of Contraction,An Official Survey Revealed On Sunday,Adding To A Run Of Indicators That Suggest The Stabilization Of The World'S Second Largest Economy."
                    ,
                    spaceUpperCase:
                        "CHINA'S FACTORY ACTIVITY EXPANDED IN MARCH AFTER FIVE CONSECUTIVE MONTHS OF CONTRACTION,AN OFFICIAL SURVEY REVEALED ON SUNDAY,ADDING TO A RUN OF INDICATORS THAT SUGGEST THE STABILIZATION OF THE WORLD'S SECOND LARGEST ECONOMY."
                    ,
                    lowerCase:
                        "china's factory activity expanded in march after five consecutive months of contraction, an official survey revealed on sunday, adding to a run of indicators that suggest the stabilization of the world's second-largest economy."
                    ,
                    upperCase:
                        "CHINA'S FACTORY ACTIVITY EXPANDED IN MARCH AFTER FIVE CONSECUTIVE MONTHS OF CONTRACTION, AN OFFICIAL SURVEY REVEALED ON SUNDAY, ADDING TO A RUN OF INDICATORS THAT SUGGEST THE STABILIZATION OF THE WORLD'S SECOND-LARGEST ECONOMY."
                    ,
                },
            },
            // 输入包含数字
            {
                title: 'text and number input',
                input: 'entity2Map',
                eol: [LF, CRLF],
                transformText: [
                    'entity|2|map',
                ],
                output: {
                    camelCase: 'entity2Map',
                    pascalCase: 'Entity2Map',
                    snakeCase: 'entity2map',
                    snakeCamelCase: 'entity2Map',
                    snakePascalCase: 'Entity2Map',
                    snakeUpperCase: 'ENTITY2MAP',
                    kebabCase: 'entity2map',
                    kebabCamelCase: 'entity2Map',
                    kebabPascalCase: 'Entity2Map',
                    kebabUpperCase: 'ENTITY2MAP',
                    spaceCase: 'entity2map',
                    spaceCamelCase: 'entity2Map',
                    spacePascalCase: 'Entity2Map',
                    spaceUpperCase: 'ENTITY2MAP',
                    lowerCase: 'entity2map',
                    upperCase: 'ENTITY2MAP',
                },
            },
            // 输入包含换行
            {
                title: 'enter input',
                input:
                    'How do you\bdo?\n                    How do you\tdo!'
                ,
                eol: [LF],
                transformText: [
                    'how|do|you|\b|do|?',
                    '                    how|do|you|\t|do|!',
                ],
                output: {
                    camelCase: 'howDoYou\bDo?\n                    howDoYou\tDo!',
                    pascalCase: 'HowDoYou\bDo?\n                    HowDoYou\tDo!',
                    snakeCase: 'how_do_you\bdo?\n                    how_do_you\tdo!',
                    snakeCamelCase: 'how_Do_You\bDo?\n                    how_Do_You\tDo!',
                    snakePascalCase: 'How_Do_You\bDo?\n                    How_Do_You\tDo!',
                    snakeUpperCase: 'HOW_DO_YOU\bDO?\n                    HOW_DO_YOU\tDO!',
                    kebabCase: 'how-do-you\bdo?\n                    how-do-you\tdo!',
                    kebabCamelCase: 'how-Do-You\bDo?\n                    how-Do-You\tDo!',
                    kebabPascalCase: 'How-Do-You\bDo?\n                    How-Do-You\tDo!',
                    kebabUpperCase: 'HOW-DO-YOU\bDO?\n                    HOW-DO-YOU\tDO!',
                    spaceCase: 'how do you\bdo?\n                    how do you\tdo!',
                    spaceCamelCase: 'how Do You\bDo?\n                    how Do You\tDo!',
                    spacePascalCase: 'How Do You\bDo?\n                    How Do You\tDo!',
                    spaceUpperCase: 'HOW DO YOU\bDO?\n                    HOW DO YOU\tDO!',
                    lowerCase: 'how do you\bdo?\n                    how do you\tdo!',
                    upperCase: 'HOW DO YOU\bDO?\n                    HOW DO YOU\tDO!',
                },
            },
            // 非英文字符，特殊字符
            {
                title: 'Chinese input 1',
                input:
                    '今天是星期日'
                ,
                eol: [LF, CRLF],
                transformText: [
                    '今天是星期日',
                ],
                output: {
                    camelCase: '今天是星期日',
                    pascalCase: '今天是星期日',
                    snakeCase: '今天是星期日',
                    snakeCamelCase: '今天是星期日',
                    snakePascalCase: '今天是星期日',
                    snakeUpperCase: '今天是星期日',
                    kebabCase: '今天是星期日',
                    kebabCamelCase: '今天是星期日',
                    kebabPascalCase: '今天是星期日',
                    kebabUpperCase: '今天是星期日',
                    spaceCase: '今天是星期日',
                    spaceCamelCase: '今天是星期日',
                    spacePascalCase: '今天是星期日',
                    spaceUpperCase: '今天是星期日',
                    lowerCase: '今天是星期日',
                    upperCase: '今天是星期日',
                },
            },
            {
                title: 'Chinese input 2',
                input:
                    '--担心你dAf_=coffee—爸妈不在家_— '
                ,
                eol: [LF, CRLF],
                transformText: [
                    '担心你|d|af|=|coffee|—爸妈不在家|— ',
                ],
                output: {
                    camelCase: '担心你dAf=Coffee—爸妈不在家— ',
                    pascalCase: '担心你DAf=Coffee—爸妈不在家— ',
                    snakeCase: '担心你d_af=coffee—爸妈不在家— ',
                    snakeCamelCase: '担心你d_Af=Coffee—爸妈不在家— ',
                    snakePascalCase: '担心你D_Af=Coffee—爸妈不在家— ',
                    snakeUpperCase: '担心你D_AF=COFFEE—爸妈不在家— ',
                    kebabCase: '担心你d-af=coffee—爸妈不在家— ',
                    kebabCamelCase: '担心你d-Af=Coffee—爸妈不在家— ',
                    kebabPascalCase: '担心你D-Af=Coffee—爸妈不在家— ',
                    kebabUpperCase: '担心你D-AF=COFFEE—爸妈不在家— ',
                    spaceCase: '担心你d af=coffee—爸妈不在家— ',
                    spaceCamelCase: '担心你d Af=Coffee—爸妈不在家— ',
                    spacePascalCase: '担心你D Af=Coffee—爸妈不在家— ',
                    spaceUpperCase: '担心你D AF=COFFEE—爸妈不在家— ',
                    lowerCase: '--担心你daf_=coffee—爸妈不在家_— ',
                    upperCase: '--担心你DAF_=COFFEE—爸妈不在家_— ',
                },
            },
            {
                title: 'Special character with emoji input',
                input:
                    '🥰 a-cup/_of Coffee🍻,-_please!. '
                ,
                eol: [LF, CRLF],
                transformText: [
                    '🥰|a|cup|/|of|coffee|🍻,|please|!. ',
                ],
                output: {
                    camelCase: '🥰aCup/OfCoffee🍻,Please!. ',
                    pascalCase: '🥰ACup/OfCoffee🍻,Please!. ',
                    snakeCase: '🥰a_cup/of_coffee🍻,please!. ',
                    snakeCamelCase: '🥰a_Cup/Of_Coffee🍻,Please!. ',
                    snakePascalCase: '🥰A_Cup/Of_Coffee🍻,Please!. ',
                    snakeUpperCase: '🥰A_CUP/OF_COFFEE🍻,PLEASE!. ',
                    kebabCase: '🥰a-cup/of-coffee🍻,please!. ',
                    kebabCamelCase: '🥰a-Cup/Of-Coffee🍻,Please!. ',
                    kebabPascalCase: '🥰A-Cup/Of-Coffee🍻,Please!. ',
                    kebabUpperCase: '🥰A-CUP/OF-COFFEE🍻,PLEASE!. ',
                    spaceCase: '🥰a cup/of coffee🍻,please!. ',
                    spaceCamelCase: '🥰a Cup/Of Coffee🍻,Please!. ',
                    spacePascalCase: '🥰A Cup/Of Coffee🍻,Please!. ',
                    spaceUpperCase: '🥰A CUP/OF COFFEE🍻,PLEASE!. ',
                    lowerCase: '🥰 a-cup/_of coffee🍻,-_please!. ',
                    upperCase: '🥰 A-CUP/_OF COFFEE🍻,-_PLEASE!. ',
                },
            },
            {
                title: 'Special character with multiple input',
                input:
                    'takeARest😊haPPy,😢triSTE,ENFADADO, 驚きました,❤️, 笑, 😎COol, 😳-Embarrassed'
                ,
                eol: [LF, CRLF],
                transformText: [
                    'take|a|rest|😊|ha|p|py|,😢|tri|ste|,|enfadado|,|驚きました,❤️,|笑,|😎|c|ool|,|😳|embarrassed',
                ],
                output: {
                    camelCase: 'takeARest😊HaPPy,😢TriSte,Enfadado,驚きました,❤️,笑,😎COol,😳Embarrassed',
                    pascalCase: 'TakeARest😊HaPPy,😢TriSte,Enfadado,驚きました,❤️,笑,😎COol,😳Embarrassed',
                    snakeCase: 'take_a_rest😊ha_p_py,😢tri_ste,enfadado,驚きました,❤️,笑,😎c_ool,😳embarrassed',
                    snakeCamelCase: 'take_A_Rest😊Ha_P_Py,😢Tri_Ste,Enfadado,驚きました,❤️,笑,😎C_Ool,😳Embarrassed',
                    snakePascalCase: 'Take_A_Rest😊Ha_P_Py,😢Tri_Ste,Enfadado,驚きました,❤️,笑,😎C_Ool,😳Embarrassed',
                    snakeUpperCase: 'TAKE_A_REST😊HA_P_PY,😢TRI_STE,ENFADADO,驚きました,❤️,笑,😎C_OOL,😳EMBARRASSED',
                    kebabCase: 'take-a-rest😊ha-p-py,😢tri-ste,enfadado,驚きました,❤️,笑,😎c-ool,😳embarrassed',
                    kebabCamelCase: 'take-A-Rest😊Ha-P-Py,😢Tri-Ste,Enfadado,驚きました,❤️,笑,😎C-Ool,😳Embarrassed',
                    kebabPascalCase: 'Take-A-Rest😊Ha-P-Py,😢Tri-Ste,Enfadado,驚きました,❤️,笑,😎C-Ool,😳Embarrassed',
                    kebabUpperCase: 'TAKE-A-REST😊HA-P-PY,😢TRI-STE,ENFADADO,驚きました,❤️,笑,😎C-OOL,😳EMBARRASSED',
                    spaceCase: 'take a rest😊ha p py,😢tri ste,enfadado,驚きました,❤️,笑,😎c ool,😳embarrassed',
                    spaceCamelCase: 'take A Rest😊Ha P Py,😢Tri Ste,Enfadado,驚きました,❤️,笑,😎C Ool,😳Embarrassed',
                    spacePascalCase: 'Take A Rest😊Ha P Py,😢Tri Ste,Enfadado,驚きました,❤️,笑,😎C Ool,😳Embarrassed',
                    spaceUpperCase: 'TAKE A REST😊HA P PY,😢TRI STE,ENFADADO,驚きました,❤️,笑,😎C OOL,😳EMBARRASSED',
                    lowerCase: 'takearest😊happy,😢triste,enfadado, 驚きました,❤️, 笑, 😎cool, 😳-embarrassed',
                    upperCase: 'TAKEAREST😊HAPPY,😢TRISTE,ENFADADO, 驚きました,❤️, 笑, 😎COOL, 😳-EMBARRASSED',
                },
            },
            {
                title: 'Random input',
                input:
                    '    NHDAs--+90-usz&* '
                ,
                eol: [LF, CRLF],
                transformText: [
                    '    n|h|d|as|+90|usz|&* ',
                ],
                output: {
                    camelCase: '    nHDAs+90Usz&* ',
                    pascalCase: '    NHDAs+90Usz&* ',
                    snakeCase: '    n_h_d_as+90usz&* ',
                    snakeCamelCase: '    n_H_D_As+90Usz&* ',
                    snakePascalCase: '    N_H_D_As+90Usz&* ',
                    snakeUpperCase: '    N_H_D_AS+90USZ&* ',
                    kebabCase: '    n-h-d-as+90usz&* ',
                    kebabCamelCase: '    n-H-D-As+90Usz&* ',
                    kebabPascalCase: '    N-H-D-As+90Usz&* ',
                    kebabUpperCase: '    N-H-D-AS+90USZ&* ',
                    spaceCase: '    n h d as+90usz&* ',
                    spaceCamelCase: '    n H D As+90Usz&* ',
                    spacePascalCase: '    N H D As+90Usz&* ',
                    spaceUpperCase: '    N H D AS+90USZ&* ',
                    lowerCase: '    nhdas--+90-usz&* ',
                    upperCase: '    NHDAS--+90-USZ&* ',
                },
            },
            {
                title: 'Mixed input 1',
                input:
                    'fsdi_sdacsaf+desd'
                ,
                eol: [LF, CRLF],
                transformText: [
                    'fsdi|sdacsaf|+|desd',
                ],
                output: {
                    camelCase: 'fsdiSdacsaf+Desd',
                    pascalCase: 'FsdiSdacsaf+Desd',
                    snakeCase: 'fsdi_sdacsaf+desd',
                    snakeCamelCase: 'fsdi_Sdacsaf+Desd',
                    snakePascalCase: 'Fsdi_Sdacsaf+Desd',
                    snakeUpperCase: 'FSDI_SDACSAF+DESD',
                    kebabCase: 'fsdi-sdacsaf+desd',
                    kebabCamelCase: 'fsdi-Sdacsaf+Desd',
                    kebabPascalCase: 'Fsdi-Sdacsaf+Desd',
                    kebabUpperCase: 'FSDI-SDACSAF+DESD',
                    spaceCase: 'fsdi sdacsaf+desd',
                    spaceCamelCase: 'fsdi Sdacsaf+Desd',
                    spacePascalCase: 'Fsdi Sdacsaf+Desd',
                    spaceUpperCase: 'FSDI SDACSAF+DESD',
                    lowerCase: 'fsdi_sdacsaf+desd',
                    upperCase: 'FSDI_SDACSAF+DESD',
                },
            },
            // add more cases...
        ],
    },
    {
        group: 'Functional verification',
        testTitle: 'Functional verification (功能验证)',
        cases: [
            // 正常输入
            {
                title: 'Normal input (foo-bar)',
                input: [
                    'foo--bar',
                    '-foo -bar',
                    '__foo - _bar-__',
                ],
                eol: [LF, CRLF],
                transformText: [
                    'foo|bar',
                ],
                output: {
                    camelCase: 'fooBar',
                    pascalCase: 'FooBar',
                    snakeCase: 'foo_bar',
                    snakeCamelCase: 'foo_Bar',
                    snakePascalCase: 'Foo_Bar',
                    snakeUpperCase: 'FOO_BAR',
                    kebabCase: 'foo-bar',
                    kebabCamelCase: 'foo-Bar',
                    kebabPascalCase: 'Foo-Bar',
                    kebabUpperCase: 'FOO-BAR',
                    spaceCase: 'foo bar',
                    spaceCamelCase: 'foo Bar',
                    spacePascalCase: 'Foo Bar',
                    spaceUpperCase: 'FOO BAR',
                    // lowerCase: 'foo--bar',
                    // upperCase: 'FOO--BAR',
                },
            },
            {
                title: 'Normal input (test-case)',
                input: [
                    'test case',
                    'test_case',
                    'test-case',
                    'testCase',
                    'TestCase',
                    'TEST_CASE',
                ],
                eol: [LF, CRLF],
                transformText: [
                    'test|case',
                ],
                output: {
                    camelCase: 'testCase',
                    pascalCase: 'TestCase',
                    snakeCase: 'test_case',
                    snakeCamelCase: 'test_Case',
                    snakePascalCase: 'Test_Case',
                    snakeUpperCase: 'TEST_CASE',
                    kebabCase: 'test-case',
                    kebabCamelCase: 'test-Case',
                    kebabPascalCase: 'Test-Case',
                    kebabUpperCase: 'TEST-CASE',
                    spaceCase: 'test case',
                    spaceCamelCase: 'test Case',
                    spacePascalCase: 'Test Case',
                    spaceUpperCase: 'TEST CASE',
                    // lowerCase: 'test case',
                    // upperCase: 'TEST CASE',
                },
            },
            {
                title: 'Normal input (apple)',
                input: [
                    'apple',
                    'APPLE',
                    'Apple',
                ],
                eol: [LF, CRLF],
                transformText: [
                    'apple',
                ],
                output: {
                    camelCase: 'apple',
                    pascalCase: 'Apple',
                    snakeCase: 'apple',
                    snakeCamelCase: 'apple',
                    snakePascalCase: 'Apple',
                    snakeUpperCase: 'APPLE',
                    kebabCase: 'apple',
                    kebabCamelCase: 'apple',
                    kebabPascalCase: 'Apple',
                    kebabUpperCase: 'APPLE',
                    spaceCase: 'apple',
                    spaceCamelCase: 'apple',
                    spacePascalCase: 'Apple',
                    spaceUpperCase: 'APPLE',
                    lowerCase: 'apple',
                    upperCase: 'APPLE',
                },
            },
            {
                title: 'Normal input (pine-apple)',
                input: [
                    'pineApple',
                ],
                eol: [LF, CRLF],
                transformText: [
                    'pine|apple',
                ],
                output: {
                    camelCase: 'pineApple',
                    pascalCase: 'PineApple',
                    snakeCase: 'pine_apple',
                    snakeCamelCase: 'pine_Apple',
                    snakePascalCase: 'Pine_Apple',
                    snakeUpperCase: 'PINE_APPLE',
                    kebabCase: 'pine-apple',
                    kebabCamelCase: 'pine-Apple',
                    kebabPascalCase: 'Pine-Apple',
                    kebabUpperCase: 'PINE-APPLE',
                    spaceCase: 'pine apple',
                    spaceCamelCase: 'pine Apple',
                    spacePascalCase: 'Pine Apple',
                    spaceUpperCase: 'PINE APPLE',
                    lowerCase: 'pineapple',
                    upperCase: 'PINEAPPLE',
                },
            },
            {
                title: 'Normal input (have-a-nice-day!)',
                input: [
                    'Have a nice day!',
                    'have a nice day!',
                    'Have-a-nice-day!',
                    'have-a-nice-day!',
                    'HAVE-A-NICE-DAY!',
                    'Have_a_nice_day!',
                    'have_a_nice_day!',
                    'HAVE_A_NICE_DAY!',
                    'HaveANiceDay!',
                    'haveANiceDay!',
                ],
                eol: [LF, CRLF],
                transformText: [
                    'have|a|nice|day|!',
                ],
                output: {
                    camelCase: 'haveANiceDay!',
                    pascalCase: 'HaveANiceDay!',
                    snakeCase: 'have_a_nice_day!',
                    snakeCamelCase: 'have_A_Nice_Day!',
                    snakePascalCase: 'Have_A_Nice_Day!',
                    snakeUpperCase: 'HAVE_A_NICE_DAY!',
                    kebabCase: 'have-a-nice-day!',
                    kebabCamelCase: 'have-A-Nice-Day!',
                    kebabPascalCase: 'Have-A-Nice-Day!',
                    kebabUpperCase: 'HAVE-A-NICE-DAY!',
                    spaceCase: 'have a nice day!',
                    spaceCamelCase: 'have A Nice Day!',
                    spacePascalCase: 'Have A Nice Day!',
                    spaceUpperCase: 'HAVE A NICE DAY!',
                    // lowerCase: 'have a nice day!',
                    // upperCase: 'HAVE A NICE DAY!',
                },
            },
            {
                title: 'Normal input (a-nice-day!)',
                input: [
                    ' A nice day! ',
                    ' a_nice_day! ',
                    ' ANiceDay! ',
                    ' A_NICE_DAY! ',
                    // ' A_Nice_DaY! ',
                    // ' A-NiCe_Day! ',
                    // ' A----NiCe_Day_-_!-- ',
                    ' A----NICE_Day_-_!-- ',
                ],
                eol: [LF, CRLF],
                transformText: [
                    ' a|nice|day|! ',
                ],
                output: {
                    camelCase: ' aNiceDay! ',
                    pascalCase: ' ANiceDay! ',
                    snakeCase: ' a_nice_day! ',
                    snakeCamelCase: ' a_Nice_Day! ',
                    snakePascalCase: ' A_Nice_Day! ',
                    snakeUpperCase: ' A_NICE_DAY! ',
                    kebabCase: ' a-nice-day! ',
                    kebabCamelCase: ' a-Nice-Day! ',
                    kebabPascalCase: ' A-Nice-Day! ',
                    kebabUpperCase: ' A-NICE-DAY! ',
                    spaceCase: ' a nice day! ',
                    spaceCamelCase: ' a Nice Day! ',
                    spacePascalCase: ' A Nice Day! ',
                    spaceUpperCase: ' A NICE DAY! ',
                    // lowerCase: ' a nice day! ',
                    // upperCase: ' A NICE DAY! ',
                },
            },
            {
                title: 'Normal input (a-nice-day)',
                input: [
                    ' A NICE-Day-',
                    ' A niceDay',
                ],
                eol: [LF, CRLF],
                transformText: [
                    ' a|nice|day',
                ],
                output: {
                    camelCase: ' aNiceDay',
                    pascalCase: ' ANiceDay',
                    snakeCase: ' a_nice_day',
                    snakeCamelCase: ' a_Nice_Day',
                    snakePascalCase: ' A_Nice_Day',
                    snakeUpperCase: ' A_NICE_DAY',
                    kebabCase: ' a-nice-day',
                    kebabCamelCase: ' a-Nice-Day',
                    kebabPascalCase: ' A-Nice-Day',
                    kebabUpperCase: ' A-NICE-DAY',
                    spaceCase: ' a nice day',
                    spaceCamelCase: ' a Nice Day',
                    spacePascalCase: ' A Nice Day',
                    spaceUpperCase: ' A NICE DAY',
                    // lowerCase: ' a nice-day-',
                    // upperCase: ' A NICE-DAY-',
                },
            },
            {
                title: 'Normal input (tom-likes-eat-ice-cream)',
                input: [
                    'TomLikes eat iceCream.',
                ],
                eol: [LF, CRLF],
                transformText: [
                    'tom|likes|eat|ice|cream|.',
                ],
                output: {
                    camelCase: 'tomLikesEatIceCream.',
                    pascalCase: 'TomLikesEatIceCream.',
                    snakeCase: 'tom_likes_eat_ice_cream.',
                    snakeCamelCase: 'tom_Likes_Eat_Ice_Cream.',
                    snakePascalCase: 'Tom_Likes_Eat_Ice_Cream.',
                    snakeUpperCase: 'TOM_LIKES_EAT_ICE_CREAM.',
                    kebabCase: 'tom-likes-eat-ice-cream.',
                    kebabCamelCase: 'tom-Likes-Eat-Ice-Cream.',
                    kebabPascalCase: 'Tom-Likes-Eat-Ice-Cream.',
                    kebabUpperCase: 'TOM-LIKES-EAT-ICE-CREAM.',
                    spaceCase: 'tom likes eat ice cream.',
                    spaceCamelCase: 'tom Likes Eat Ice Cream.',
                    spacePascalCase: 'Tom Likes Eat Ice Cream.',
                    spaceUpperCase: 'TOM LIKES EAT ICE CREAM.',
                    lowerCase: 'tomlikes eat icecream.',
                    upperCase: 'TOMLIKES EAT ICECREAM.',
                },
            },
            {
                title: 'Normal input (apple-2-Tree)',
                input: [
                    ' apple2-Tree ',
                    ' apple2Tree ',
                ],
                eol: [LF, CRLF],
                transformText: [
                    ' apple|2|tree ',
                ],
                output: {
                    camelCase: ' apple2Tree ',
                    pascalCase: ' Apple2Tree ',
                    snakeCase: ' apple2tree ',
                    snakeCamelCase: ' apple2Tree ',
                    snakePascalCase: ' Apple2Tree ',
                    snakeUpperCase: ' APPLE2TREE ',
                    kebabCase: ' apple2tree ',
                    kebabCamelCase: ' apple2Tree ',
                    kebabPascalCase: ' Apple2Tree ',
                    kebabUpperCase: ' APPLE2TREE ',
                    spaceCase: ' apple2tree ',
                    spaceCamelCase: ' apple2Tree ',
                    spacePascalCase: ' Apple2Tree ',
                    spaceUpperCase: ' APPLE2TREE ',
                    // lowerCase: ' apple2-tree ',
                    // upperCase: ' APPLE2-TREE ',
                },
            },
            {
                title: 'Normal input (Julius-Caesar, William-Shakespeare, ...)',
                input:
                    ' Julius_Caesar, William_Shakespeare, Albert_Einstein, Marie_Curie, WolfgangAmadeusMozart, Vincent-van-Gogh. '
                ,
                eol: [LF, CRLF],
                transformText: [
                    ' julius|caesar|,|william|shakespeare|,|albert|einstein|,|marie|curie|,|wolfgang|amadeus|mozart|,|vincent|van|gogh|. ',
                ],
                output: {
                    camelCase: ' juliusCaesar,WilliamShakespeare,AlbertEinstein,MarieCurie,WolfgangAmadeusMozart,VincentVanGogh. ',
                    pascalCase: ' JuliusCaesar,WilliamShakespeare,AlbertEinstein,MarieCurie,WolfgangAmadeusMozart,VincentVanGogh. ',
                    snakeCase: ' julius_caesar,william_shakespeare,albert_einstein,marie_curie,wolfgang_amadeus_mozart,vincent_van_gogh. ',
                    snakeCamelCase: ' julius_Caesar,William_Shakespeare,Albert_Einstein,Marie_Curie,Wolfgang_Amadeus_Mozart,Vincent_Van_Gogh. ',
                    snakePascalCase: ' Julius_Caesar,William_Shakespeare,Albert_Einstein,Marie_Curie,Wolfgang_Amadeus_Mozart,Vincent_Van_Gogh. ',
                    snakeUpperCase: ' JULIUS_CAESAR,WILLIAM_SHAKESPEARE,ALBERT_EINSTEIN,MARIE_CURIE,WOLFGANG_AMADEUS_MOZART,VINCENT_VAN_GOGH. ',
                    kebabCase: ' julius-caesar,william-shakespeare,albert-einstein,marie-curie,wolfgang-amadeus-mozart,vincent-van-gogh. ',
                    kebabCamelCase: ' julius-Caesar,William-Shakespeare,Albert-Einstein,Marie-Curie,Wolfgang-Amadeus-Mozart,Vincent-Van-Gogh. ',
                    kebabPascalCase: ' Julius-Caesar,William-Shakespeare,Albert-Einstein,Marie-Curie,Wolfgang-Amadeus-Mozart,Vincent-Van-Gogh. ',
                    kebabUpperCase: ' JULIUS-CAESAR,WILLIAM-SHAKESPEARE,ALBERT-EINSTEIN,MARIE-CURIE,WOLFGANG-AMADEUS-MOZART,VINCENT-VAN-GOGH. ',
                    spaceCase: ' julius caesar,william shakespeare,albert einstein,marie curie,wolfgang amadeus mozart,vincent van gogh. ',
                    spaceCamelCase: ' julius Caesar,William Shakespeare,Albert Einstein,Marie Curie,Wolfgang Amadeus Mozart,Vincent Van Gogh. ',
                    spacePascalCase: ' Julius Caesar,William Shakespeare,Albert Einstein,Marie Curie,Wolfgang Amadeus Mozart,Vincent Van Gogh. ',
                    spaceUpperCase: ' JULIUS CAESAR,WILLIAM SHAKESPEARE,ALBERT EINSTEIN,MARIE CURIE,WOLFGANG AMADEUS MOZART,VINCENT VAN GOGH. ',
                    lowerCase: ' julius_caesar, william_shakespeare, albert_einstein, marie_curie, wolfgangamadeusmozart, vincent-van-gogh. ',
                    upperCase: ' JULIUS_CAESAR, WILLIAM_SHAKESPEARE, ALBERT_EINSTEIN, MARIE_CURIE, WOLFGANGAMADEUSMOZART, VINCENT-VAN-GOGH. ',
                },
            },
            {
                title: 'Normal input (&quot;You&quot; (or &quot;Your&quot;) ...)',
                input:
                    '      &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity\n' +
                    '      exercising permissions granted by this License.'
                ,
                eol: [LF],
                transformText: [
                    '      &|quot|;|you|&|quot|;|(|or|&|quot|;|your|&|quot|;)|shall|mean|an|individual|or|legal|entity',
                    '      exercising|permissions|granted|by|this|license|.',
                ],
                output: {
                    camelCase:
                        '      &quot;You&Quot;(Or&Quot;Your&Quot;)ShallMeanAnIndividualOrLegalEntity\n' +
                        '      exercisingPermissionsGrantedByThisLicense.'
                    ,
                    pascalCase:
                        '      &Quot;You&Quot;(Or&Quot;Your&Quot;)ShallMeanAnIndividualOrLegalEntity\n' +
                        '      ExercisingPermissionsGrantedByThisLicense.'
                    ,
                    snakeCase:
                        '      &quot;you&quot;(or&quot;your&quot;)shall_mean_an_individual_or_legal_entity\n' +
                        '      exercising_permissions_granted_by_this_license.'
                    ,
                    snakeCamelCase:
                        '      &quot;You&Quot;(Or&Quot;Your&Quot;)Shall_Mean_An_Individual_Or_Legal_Entity\n' +
                        '      exercising_Permissions_Granted_By_This_License.'
                    ,
                    snakePascalCase:
                        '      &Quot;You&Quot;(Or&Quot;Your&Quot;)Shall_Mean_An_Individual_Or_Legal_Entity\n' +
                        '      Exercising_Permissions_Granted_By_This_License.'
                    ,
                    snakeUpperCase:
                        '      &QUOT;YOU&QUOT;(OR&QUOT;YOUR&QUOT;)SHALL_MEAN_AN_INDIVIDUAL_OR_LEGAL_ENTITY\n' +
                        '      EXERCISING_PERMISSIONS_GRANTED_BY_THIS_LICENSE.'
                    ,
                    kebabCase:
                        '      &quot;you&quot;(or&quot;your&quot;)shall-mean-an-individual-or-legal-entity\n' +
                        '      exercising-permissions-granted-by-this-license.'
                    ,
                    kebabCamelCase:
                        '      &quot;You&Quot;(Or&Quot;Your&Quot;)Shall-Mean-An-Individual-Or-Legal-Entity\n' +
                        '      exercising-Permissions-Granted-By-This-License.'
                    ,
                    kebabPascalCase:
                        '      &Quot;You&Quot;(Or&Quot;Your&Quot;)Shall-Mean-An-Individual-Or-Legal-Entity\n' +
                        '      Exercising-Permissions-Granted-By-This-License.'
                    ,
                    kebabUpperCase:
                        '      &QUOT;YOU&QUOT;(OR&QUOT;YOUR&QUOT;)SHALL-MEAN-AN-INDIVIDUAL-OR-LEGAL-ENTITY\n' +
                        '      EXERCISING-PERMISSIONS-GRANTED-BY-THIS-LICENSE.'
                    ,
                    spaceCase:
                        '      &quot;you&quot;(or&quot;your&quot;)shall mean an individual or legal entity\n' +
                        '      exercising permissions granted by this license.'
                    ,
                    spaceCamelCase:
                        '      &quot;You&Quot;(Or&Quot;Your&Quot;)Shall Mean An Individual Or Legal Entity\n' +
                        '      exercising Permissions Granted By This License.'
                    ,
                    spacePascalCase:
                        '      &Quot;You&Quot;(Or&Quot;Your&Quot;)Shall Mean An Individual Or Legal Entity\n' +
                        '      Exercising Permissions Granted By This License.'
                    ,
                    spaceUpperCase:
                        '      &QUOT;YOU&QUOT;(OR&QUOT;YOUR&QUOT;)SHALL MEAN AN INDIVIDUAL OR LEGAL ENTITY\n' +
                        '      EXERCISING PERMISSIONS GRANTED BY THIS LICENSE.'
                    ,
                    lowerCase:
                        '      &quot;you&quot; (or &quot;your&quot;) shall mean an individual or legal entity\n' +
                        '      exercising permissions granted by this license.'
                    ,
                    upperCase:
                        '      &QUOT;YOU&QUOT; (OR &QUOT;YOUR&QUOT;) SHALL MEAN AN INDIVIDUAL OR LEGAL ENTITY\n' +
                        '      EXERCISING PERMISSIONS GRANTED BY THIS LICENSE.'
                    ,
                },
            },
            // add more cases...
        ],
    },
    {
        group: 'Extreme case verification',
        testTitle: 'Extreme case verification (极端情况验证)',
        cases: [
            // 极端情况

            // add more cases...
        ],
    },
    {
        group: 'Xxxx verification',
        testTitle: 'Xxxx verification (xxx验证)',
        cases: [
            // Description
            // {
            //     title: 'Normal input ( ...)',
            //     input: '',
            //     eol: [LF, CRLF],
            //     transformText: [
            //         '',
            //     ],
            //     output: {
            //         camelCase: '',
            //         pascalCase: '',
            //         snakeCase: '',
            //         snakeCamelCase: '',
            //         snakePascalCase: '',
            //         snakeUpperCase: '',
            //         kebabCase: '',
            //         kebabCamelCase: '',
            //         kebabPascalCase: '',
            //         kebabUpperCase: '',
            //         spaceCase: '',
            //         spaceCamelCase: '',
            //         spacePascalCase: '',
            //         spaceUpperCase: '',
            //         lowerCase: '',
            //         upperCase: '',
            //     },
            // },
            // add more cases...
        ],
    },
    // add more cases...
];

export default testGroups;