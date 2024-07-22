    Feature: Groupama - Consultazione Fondi
        @mig3
        @migA
        Scenario: 99. Ricerca e consultazione fondo
        # CONSULTAZIONE ----------------------------------------------------
            Given I log in groupama first page with user "GC08073"
            And I select the groupama sales network "GROUPAMA ASSICURAZIONI"
            #And I delete the "TestFondi" board and I create new one